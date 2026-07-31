# Fastic: Product & QA Analysis

A hands-on, end-to-end quality and product analysis of the Fastic intermittent-fasting
app, evaluated on a real device (iPhone 13, iOS) by walking through the full first-time
user experience (FTUE).

This repository evaluates Fastic through both a **product** and a **quality
engineering** lens, assessing technical correctness, data integrity, health safety,
edge-case behavior, and business value delivery.

---

## Skills Demonstrated

Product thinking, UX evaluation, risk-based testing, test case design, bug reporting,
manual and exploratory testing, and mobile QA on iOS.

---

> ### Executive Summary
>
> - **Personalization gap:** The app asks 39 onboarding questions but shows no
>   personalized insight before the trial-free paywall, a likely cause of early
>   onboarding drop-off.
> - **Data persistence and trust:** Collected user preferences are requested again in
>   downstream features (for example the meal planner), degrading trust and adding
>   unnecessary friction.
> - **Safety and liability exposure:** Health safeguards are asymmetric. Underweight
>   inputs are gated, but an extreme high current weight (300 kg) is accepted without
>   warning, and plans are not adapted for contraindicated users.
> - **Core recommendation:** Deliver a single personalized insight (for example
>   tailored BMI or fasting guidance) before the paywall, to bridge the
>   promise-delivery gap and support long-term retention.

---

## Repository Structure

- **[Product-Analysis.md](./Product-Analysis.md):** Full product and UX analysis
  covering the FTUE funnel, UI evaluation, ethical review, prioritized recommendations,
  and product edge cases.
- **[QA-Perspective.md](./QA-Perspective.md):** Testing approach and risk-based
  prioritization from a QA standpoint.
- **[Test-Cases.md](./Test-Cases.md):** Test cases covering functional, boundary,
  negative, and exploratory scenarios.
- **[Bug-Reports.md](./Bug-Reports.md):** Structured bug reports with steps to
  reproduce, expected vs. actual behavior, severity, priority, and visual evidence.
- **[Risk-Analysis.md](./Risk-Analysis.md):** Business risks (health and legal
  liability, trust and retention, brand, and conversion) with mitigations.
- **[screenshots/](./screenshots/):** Visual evidence captured during real-device
  testing on iOS.

---

## Core Finding

Fastic sells the promise of personalization but does not deliver it: the app asks 39
onboarding questions yet shows almost no real, personal value before a trial-free
paywall. Every finding in this analysis traces back to that gap.

Start with [Product-Analysis.md](./Product-Analysis.md) for the full reasoning, or
[Bug-Reports.md](./Bug-Reports.md) for the reproducible technical defects.