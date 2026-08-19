# Product & UX Analysis: Wise

A short product and UX analysis of the Wise app, evaluated on a real device
(iPhone 13, iOS) by going through the full first-time user experience (FTUE) as a
new user in Turkey.

## Core finding

Wise onboarding is honest and focused: it moves the user quickly and securely to
the one feature actually available to them (international transfer), without
over-promising features it cannot deliver. This is a disciplined onboarding, but it
carries two risks: a single available feature in Turkey limits retention, and
transfer fees, while disclosed, are visually understated.

## FTUE and UX

The onboarding flow is fast and low-friction. Several steps advance almost on their
own, so the user reaches the core action with little effort. The app is honest about
scope: features not available in Turkey (card, balances, payments) are clearly
labeled "not available yet" rather than hidden or falsely promised. Security steps
(passcode, Face ID, 2-step verification) add friction, but it is meaningful friction
appropriate for a financial app. The visual design is modern and clean, with motion
that feels lively without being tiring.

The aha moment comes early: within a few steps the user reaches a working transfer
screen and can act on the app's core promise immediately, rather than being asked to
pay before seeing any value.

## Strengths

- **Honest scoping.** Unavailable features are labeled "not available yet" instead of
  being hidden or oversold, which builds trust in a financial product.
- **Fast, focused onboarding.** The flow removes friction everywhere except where it
  matters, guiding the user straight to the one usable feature.
- **Meaningful security friction.** Passcode, Face ID, and 2-step verification are
  required. Turning off security notifications triggers a clear warning, reinforcing a
  security-first design.
- **Fee disclosure.** The transfer fee is shown on the send screen with a detail icon,
  rather than hidden until after payment.

## Risks

- **Retention risk: a single feature in Turkey.** Only international transfer is
  available; card, balances, and payments are not. A user who makes one transfer may
  not return. Wise appears to mitigate this with a referral program ("Earn TRY425,"
  invite friends for a reward), which drives repeat engagement and growth. Whether
  referral alone is enough to retain single-feature users is worth testing.
- **Trust risk: understated fees.** On a 1,000 TRY transfer, 145.81 TRY (about 14.5%)
  is fee, and the recipient receives 15.39 EUR. The fee is disclosed, but it is small
  and grey, while the large numbers and the green "Send" button dominate the screen.
  The information is present but not prominent. This sits in an ethical grey area:
  technically transparent, yet visually de-emphasized. It may lift short-term
  conversion, but it conflicts with Wise's transparency-focused brand and risks
  eroding trust when the user later notices how much was deducted.

## Recommendations

- **Quick win (low effort, medium impact):** Give the fee slightly more visual weight
  on the send screen (for example, showing the effective rate or fee percentage near
  the amount), aligning the design with Wise's transparency brand without adding steps.
- **Strategy (higher effort, high impact):** As more features become available in
  Turkey, expand beyond single-feature use to strengthen retention, so growth does not
  depend on referral alone.

## Product edge case

During onboarding, the address field accepted a valid address that did not belong to
the user, and let the flow continue with no immediate verification. Whether Wise
verifies the address later, during full KYC (identity and proof-of-address checks),
was not tested and is out of scope here. If no later check exists, accepting an
unverified address could be a compliance gap worth reviewing; confirming this would
require going through the full KYC flow.