# Flaky Test Investigations

This document contains investigations of real flaky tests encountered while building the projects in this portfolio.

Rather than documenting only the final fix, each case explains the debugging process: the initial symptom, the hypotheses that were tested (including incorrect ones), the evidence used to identify the root cause, and the lesson learned.

The goal is to demonstrate debugging and root-cause analysis rather than simply making tests pass.

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