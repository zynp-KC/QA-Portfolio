# Flaky Test Investigations

This document contains investigations of real flaky tests encountered while building the
projects in this portfolio.

Rather than documenting only the final fix, each case explains the debugging process: the
initial symptom, the hypotheses that were tested (including incorrect ones), the evidence
used to identify the root cause, and the lesson learned.

The goal is to demonstrate debugging and root-cause analysis rather than simply making tests pass.

---

## Case 1 — A `force: true` that was hiding a real race condition

- **Project:** Week08 — Demoblaze (Playwright, JavaScript)
- **Area:** Authentication suite (login, signup, logout)

### Symptom
The signup page object clicked its submit button with `{ force: true }`, justified by a
comment claiming a "WebKit rendering incompatibility." At the same time, several auth tests
failed intermittently in CI with `locator.click: Timeout exceeded` — the textbook definition
of flaky.

### What I tried first (and why it was wrong)
My first assumption was the same as the original author's: the click itself was unreliable,
hence `force: true`. But `force: true` disables Playwright's actionability checks. It does
not fix a bad click; it silences the browser's warning that the click is unsafe.

To verify that assumption, I removed the flag, scoped the locator to the modal, added an
explicit wait, and reran the test five times across all browsers. It passed every run —
proving the force flag was never solving the real problem. Removing it also exposed failures
that a local `retries: 1` had been hiding.

### Eliminating hypotheses
The remaining failure was intermittent and moved between tests and browsers. I tested one
hypothesis at a time:

- **Parallelism?** Single worker — still failed. Rejected.
- **Headless mode?** Headed vs headless, three runs each — identical. Rejected.
- **A specific browser?** Reordered the project list; the failure followed position, not
  engine. Rejected.
- **Cumulative server load?** One browser ran 36 tests alone without failing. Rejected.

Three of these were my own hypotheses, and the evidence ruled them out one by one.

### Root cause
The trace showed the click completing and then hanging. Every failing test involved
Demoblaze's native `alert()` dialogs. The sequence was a deadlock: the click opens an
`alert()`, the alert blocks the JavaScript thread, the click's `await` cannot resolve, and
the line that would dismiss the dialog never runs. Whether it deadlocked depended on timing —
which is exactly why it was flaky.

### Fix
Attach the dialog handler before the click so the alert is dismissed the instant it opens,
and resolve its message through a promise so the assertion does not run early:

```javascript
const dialogMessage = new Promise((resolve) => {
    page.once('dialog', async (dialog) => {
        const message = dialog.message();
        await dialog.accept();      // dismiss immediately → thread unblocks → click resolves
        resolve(message);
    });
});

await loginModal.login(user, wrongPassword);
expect(await dialogMessage).toContain('Wrong password');
```

This also exposed a second defect: the original assertion only checked *that* a dialog
appeared, not *what* it said — a test that had been green while verifying nothing.

### Lesson
`force: true` and broad retries are not fixes; they are ways to stop seeing a problem.
Collecting the trace before changing code is what turned an intermittent mystery into a
deterministic, fixable bug. The goal of reliable testing is not to make a test green as quickly as possible, but to explain why it was red in the first place.
