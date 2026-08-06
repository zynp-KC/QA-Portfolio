# Flaky Test Investigations

This document contains investigations of real flaky tests encountered while building the projects in this portfolio.

Rather than documenting only the final fix, each case explains the debugging process: the initial symptom, the hypotheses that were tested (including incorrect ones), the evidence used to identify the root cause, and the lesson learned.

The goal is to demonstrate debugging and root-cause analysis rather than simply making tests pass.

The four investigations cover different layers of automated testing: UI synchronization, application behavior, CI pipeline reliability, and separating an action from its expected outcome

---

## Case 1 - A `force: true` that was hiding a real race condition

- **Project:** Week08, Demoblaze (Playwright, JavaScript)
- **Area:** Authentication suite (login, signup, logout)

### Symptom
The signup page object clicked its submit button with `{ force: true }`, justified by a comment claiming a "WebKit rendering incompatibility." At the same time, several auth tests failed intermittently in CI with `locator.click: Timeout exceeded`, the textbook definition of flaky.

### What I tried first (and why it was wrong)
My first assumption was the same as the original author's: the click itself was unreliable, hence `force: true`. But `force: true` disables Playwright's actionability checks. It does not fix a bad click; it silences the browser's warning that the click is unsafe.

To verify that assumption, I removed the flag, scoped the locator to the modal, added an explicit wait, and reran the test five times across all browsers. It passed every run, proving the force flag was never solving the real problem. Removing it also exposed failures that a local `retries: 1` had been hiding.

### Eliminating hypotheses
The remaining failure was intermittent and moved between tests and browsers. I tested one hypothesis at a time:

- **Parallelism?** Single worker, still failed. Rejected.
- **Headless mode?** Headed vs headless, three runs each, identical. Rejected.
- **A specific browser?** Reordered the project list; the failure followed position, not engine. Rejected.
- **Cumulative server load?** One browser ran 36 tests alone without failing. Rejected.

Three of these were my own hypotheses, and the evidence ruled them out one by one.

### Root cause
The trace showed the click completing and then hanging. Every failing test involved Demoblaze's native `alert()` dialogs. The sequence was a deadlock: the click opens an `alert()`, the alert blocks the JavaScript thread, the click's `await` cannot resolve, and the line that would dismiss the dialog never runs. Whether it deadlocked depended on timing, which is exactly why it was flaky.

### Fix
Attach the dialog handler before the click so the alert is dismissed the instant it opens, and resolve its message through a promise so the assertion does not run early:

```javascript
const dialogMessage = new Promise((resolve) => {
    page.once('dialog', async (dialog) => {
        const message = dialog.message();
        await dialog.accept();
        resolve(message);
    });
});

await loginModal.login(user, wrongPassword);
expect(await dialogMessage).toContain('Wrong password');
```

This also exposed a second defect: the original assertion only checked *that* a dialog appeared, not *what* it said, a test that had been green while verifying nothing.

### Lesson
`force: true` and broad retries are not fixes; they are ways to stop seeing a problem. Collecting the trace before changing code is what turned an intermittent mystery into a deterministic, fixable bug. The goal of reliable testing is not to make a test green as quickly as possible, but to explain why it was red in the first place.

---

## Case 2 - A "flaky" checkout test that revealed the feature never worked

- **Project:** Week08, Demoblaze (Playwright, JavaScript)
- **Area:** Checkout flow

### Symptom
Two checkout tests failed intermittently, roughly one run in twenty, with the order confirmation (`.sweet-alert`) never appearing. Every other run passed. It looked like a classic timing flake in the confirmation step.

### What I tried first (and why it was wrong)
The obvious assumption was that the confirmation dialog was simply slow to render, causing the assertion to time out. But raising the timeout would only have hidden the question, not answered it. Instead of guessing, I logged the network activity around the purchase to see what the server actually returned.

### What the network showed
On a passing run, I noticed something unexpected: the confirmation dialog appeared before the request had even received a response.

```text
POST /deletecart            -> request sent
(confirmation renders here) -> UI shows success
200 "Item deleted."         -> response arrives after the confirmation
```

Two problems surfaced at once:

1. **The confirmation is shown before the server responds.** The success message renders the instant the request is dispatched, not when the order is accepted. If the server rejected or dropped the request, the user would still see "Thank you for your purchase!"

2. **No order is ever submitted.** The only request sent is `POST /deletecart`, which responds `"Item deleted."`. None of the form data (name, address, credit card) is transmitted anywhere. The checkout does not create an order; it empties the cart and shows a message.

### Root cause
The intermittent failure was a race between a fire-and-forget request and a client-side confirmation with no dependency between them. But the deeper finding was architectural: the checkout has no order submission at all. This single defect also explained two bugs that had been logged separately: a credit card field accepting letters (BUG-03) and accepting too-few digits (BUG-04). There is no server-side card validation because the card number never reaches a server.

Three separately-filed bugs (BUG-03, BUG-04, BUG-11) collapsed into one root cause.

### Fix and disposition
This is an application defect, not a test defect, and Demoblaze is a third-party demo I cannot change. The correct action was to document it accurately rather than assert around it. The tests were annotated to state explicitly what they verify (UI state) and what they cannot (a persisted order), and the release sign-off was updated to mark the checkout flow as non-functional rather than merely unvalidated.

### Lesson
An intermittent failure is sometimes the visible edge of a defect that is always present. The retry-and-move-on reflex would have kept the suite green and left a broken checkout undetected. Reading the network instead of raising the timeout turned a "flaky test" into a critical, evidence-backed finding: a purchase flow that confirms success without ever placing an order.

---

## Case 3 - A CI job that hung for 20 minutes with no diagnosis

- **Project:** Week07, OrangeHRM (Playwright, JavaScript)
- **Area:** CI pipeline (GitHub Actions)

### Symptom
After a routine push, the Week07 CI job ran for 19 minutes and was then killed by the runner's 20-minute limit. The log showed `Running 21 tests` followed by silence, then `The operation was canceled`. No test result was ever printed, so there was nothing to diagnose. The two previous runs had passed in 2-3 minutes.

### Ruling myself out first
My push had only touched the Week08 folder, but the failing job was Week07. Before blaming anything external, I verified this with evidence rather than assumption:

- `git show --stat HEAD` confirmed all changed files were under Week08. No Week07 file was touched.
- The workflow used `working-directory` per matrix job, so one project's config cannot leak into another's.

That eliminated my own change as the cause. It also eliminated the site being down: the demo loaded fine in a browser, and running the suite locally passed 21/21 in under two minutes.

### Root cause
The config had no navigation or action timeouts, and set `retries: 2` on CI. When the demo became slow or briefly unreachable from the CI runner, `page.goto()` waited on Playwright's default navigation behavior, and every retry multiplied that wait. With 63 test executions running serially, three attempts each, the job could never finish inside its budget. It did not fail; it starved. That is why the log showed a bare `canceled` with no test output: no single test ever completed.

### Fix
Make an unreachable host fail fast instead of hanging, and stop retries from multiplying the wait:

```javascript
retries: process.env.CI ? 1 : 0,
timeout: 45000,
use: {
    actionTimeout: 10000,
    navigationTimeout: 20000,
},
```

With an explicit `navigationTimeout`, a dead host now produces a clear `Timeout 20000ms exceeded: navigating to ...` error that names the failing step, instead of an uninformative `canceled`. Reducing CI retries from 2 to 1 stops the pipeline from tripling the wait against a host that is not going to answer.

The same gap existed in two other projects (Week05 and Week08), which had also been set up from Playwright's default template. Week05 was in fact the original source of a long-standing, unexplained CI hang. The fix was applied consistently across all three.

### Lesson
A hang is worse than a failure, because a failure tells you where it broke and a hang tells you nothing. The goal was not just to make CI green again, but to guarantee that the next time a public demo goes down, the pipeline reports a precise, named timeout in seconds instead of disappearing for twenty minutes. Fail fast, fail legibly.

---

## Case 4 - A login flake I "fixed" locally that CI proved I hadn't

- **Project:** Week08, Demoblaze (Playwright, JavaScript)
- **Area:** Authentication, shared across the auth, cart, and checkout suites

### Symptom
`TC-003 Remove product from cart` failed only on Firefox, roughly one run in five, while Chromium and WebKit passed. The trace pointed not at the removal logic but at the login precondition in `beforeEach`, where `expect(#nameofuser).toContainText('Welcome')` timed out against an element that stayed empty (`""`) for the entire timeout. The login was never completing; the removal test was just the first place that noticed.

### First fix, and why local success was misleading
The `login()` page object filled the fields, clicked "Log in", and returned immediately — nothing tied the method's return to login actually completing, so the assertion raced an in-flight login. I made `login()` wait for the modal to close (Demoblaze closes it only on success) and reran the cart suite five times on Firefox: 15/15 passed. I treated that as proof.

It wasn't. Five green runs on one browser, on the happy path, said nothing about the other paths that shared the same method.

### What CI revealed that local runs didn't
The next CI run failed in two distinct ways:

1. **The negative-path test now failed deterministically on all three browsers.** `TC-002 Login with wrong password` also calls `login()`. On a wrong password Demoblaze does not close the modal — it raises a "Wrong password" alert and leaves the modal open. My `waitFor({ state: 'hidden' })` therefore never resolved and timed out every time. I had baked a *success* assumption into a method the *failure* path also depends on — the exact anti-pattern I had refactored out of my API client (baked-in `expect(200)`) earlier the same day, reintroduced in a new place.

2. **The original flake was not fully gone.** On WebKit, the cart and checkout preconditions still failed intermittently with the same empty `#nameofuser`, passing only on retry. Waiting for the modal had not made the login itself more reliable; part of the flakiness was environmental — Demoblaze is an unreliable public demo whose `/login` is sometimes slow or unresponsive from the CI runner.

### Root cause and fix
Two separate causes hid behind one symptom: a design fault (a shared action method that assumed success) and an environmental fault (an unreliable third-party backend). The fix was to separate the action from its outcome, so the same login step serves both paths:

```javascript
// Pure action — makes no assumption about success or failure.
// Used by both the valid- and invalid-credential paths.
async login(username, password) {
    await this.modal.waitFor({ state: 'visible' });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}

// Happy path only: Demoblaze closes the modal only on a successful login.
async loginExpectingSuccess(username, password) {
    await this.login(username, password);
    await this.modal.waitFor({ state: 'hidden', timeout: 15000 });
}
```

The negative test calls `login()` and asserts on the alert; the positive tests call `loginExpectingSuccess()`. TC-002 became deterministic again. The residual WebKit flake is environmental and is absorbed by scoped CI retries rather than pretended away — the correct disposition for a third-party demo I cannot change.

### Lesson
Passing locally is not the same as being correct. Five green runs on one browser and one path gave me false confidence and hid a deterministic regression on a path I had not exercised. Two lessons compounded: a success assumption does not belong in a method shared by the failure path, and not every flake is a test defect — telling the fixable design fault apart from the unavoidable environmental one is part of the diagnosis, not an excuse after it.