# Flaky Test Investigations

This document contains investigations of real flaky tests encountered while building the projects in this portfolio.

Rather than documenting only the final fix, each case explains the debugging process: the initial symptom, the hypotheses that were tested (including incorrect ones), the evidence used to identify the root cause, and the lesson learned.

The goal is to demonstrate debugging and root-cause analysis rather than simply making tests pass.

The four investigations cover different layers of automated testing: UI synchronization, application behavior, CI pipeline reliability, and deterministic waiting strategy.

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

## Case 4 - A Firefox-only login flake that was never actually about the test

- **Project:** Week08, Demoblaze (Playwright, JavaScript)
- **Area:** Authentication precondition in the Cart suite (`beforeEach` login)

### Symptom
`TC-003 Remove product from cart` failed only on Firefox, roughly one run in five, while Chromium and WebKit always passed. The stack trace pointed not at the removal logic but at line 20 in `beforeEach` — the login precondition — where `expect(#nameofuser).toContainText('Welcome')` timed out. The trace note was the key clue: the element was present but held the value `""` for the entire timeout (`28 × locator resolved to <a id="nameofuser"> - unexpected value ''`).

### What I tried first (and why it was wrong)
Because the failure surfaced under `TC-003`, the instinct was to inspect the delete logic. But the trace located it at the shared login step, and an element that stays empty for the full timeout is not slow — it was never populated. Raising the timeout was already ruled out before I started: the `expect` timeout was set to 25s and the element stayed empty the whole 25s. More waiting was not the answer.

### Eliminating hypotheses
- **Is it specific to TC-003?** The failing line was the login precondition shared by every cart test, and other tests using the same login sometimes passed. Rejected.
- **Is `#nameofuser` just slow to render?** With a 25s timeout and a value that never changed from `""`, this was not a render delay. The login itself never completed. Rejected.
- **Is it a real application bug?** A genuine defect would fail deterministically across engines. This failed only on Firefox, and only intermittently — the signature of timing, not behavior. Rejected.

### Root cause
The `login()` page object filled the fields, clicked "Log in", and returned immediately — nothing tied the method's return to login actually completing. The Bootstrap login modal fades in, and on Firefox — whose animation timing differs from Chromium and WebKit — the click occasionally landed before the modal had settled and was swallowed, so the `/login` request never went out. With no request, `#nameofuser` was never populated, and the assertion timed out against an element that would stay empty forever. The intermittency came entirely from animation timing, which is exactly what made it flaky.

### Fix
Make `login()` atomic: it should return only once login has demonstrably completed. The cleanest deterministic signal is one the user can observe — Demoblaze closes the login modal only on a successful login, so waiting for the modal to disappear ties the method to real completion.

```javascript
async login(username, password) {
    await this.modal.waitFor({ state: 'visible' });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    // Demoblaze closes the modal only after a successful login.
    // Waiting for it makes login() return only once login truly completed.
    await this.modal.waitFor({ state: 'hidden' });
}
```

Verified by running the cart suite five times on Firefox (`--repeat-each=5`): 15/15 passed. A single green run would not have been evidence; the repetition is what demonstrates the flake is gone.

### A design choice worth naming
An alternative was to wait on the login network response directly (`page.waitForResponse(res => res.url().includes('/login'))`). That is more surgical — if the click is swallowed and no request is sent, it fails at exactly that point. But it couples the test to the application's internal wiring: if the endpoint path ever changed while the feature still worked, the test would break. Waiting for the modal to close is a black-box signal — it asserts what the user observes, not how the app is built — so it survives internal refactors. I chose the UI signal for resilience; the network wait remains the better tool when a swallowed click needs to be pinpointed rather than merely prevented.

### Lesson
A blind wait (`waitForTimeout`) and a deterministic wait look alike in code but are opposites in intent: one hopes the work is done, the other knows it is. The reflex to "just raise the timeout" was already disproven here — it was 25s and the element stayed empty throughout. The fix was not to wait longer but to wait for the *right thing*, and to prefer a signal the user can see over one tied to the application's internals.