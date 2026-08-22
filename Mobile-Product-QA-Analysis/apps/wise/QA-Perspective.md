# QA Perspective: Wise

A short view of how I would approach testing Wise as a financial app. Detailed cases
are in Test-Cases.md; this covers where the risk is and what I would prioritize.

## Risk-based testing approach

For a money-transfer app, failure cost is highest where money and security are
involved, so I prioritize accordingly.

| Area | Probability | Impact | Priority |
|---|---|---|---|
| Security (passcode, Face ID, 2-step) | Medium | Critical | **P0** |
| Transfer accuracy (fee, rate, recipient amount) | Medium | Critical | **P0** |
| Input validation (amount, minimum, address) | Medium | High | **P1** |
| Onboarding and account setup | Medium | Medium | **P2** |

**Security (P0).** Any weakness in passcode, Face ID, or 2-step verification directly
threatens user funds and trust. This is the highest-priority area for a financial app.

**Transfer accuracy (P0).** The fee, exchange rate, and recipient amount must be
correct and consistent. An error here means the user sends or receives the wrong
amount, which is both a financial and a trust failure.

**Input validation (P1).** Amount boundaries (zero, minimum, very large) and address
handling feed directly into transfer correctness and compliance, so negative and
boundary testing here is essential.

**Onboarding and account setup (P2).** Important for first impressions, but lower
severity: an onboarding issue frustrates the user without risking funds.

## Automated vs. manual

**Automate (deterministic, regression-worthy):** input validation and amount
boundaries, currency selection, and the security setup flow (passcode and 2-step
paths). On mobile these fit an Appium-based suite, with API-level checks where the
backend is reachable so rate and fee logic can be verified without driving the full UI.

**Test manually or exploratory (judgment-heavy):** whether fee and rate presentation
is clear and trustworthy to a real user, and the overall feel of the security and
transfer flows, which need human judgment rather than a green assertion.

## Scope limits

This view is iOS-only (iPhone 13) and limited to what is observable without completing
real transactions or full KYC. Actual money movement, transfer settlement, and
identity verification were not tested and are out of scope. In Turkey only
international transfer is available, so features like card and balances could not be
evaluated.