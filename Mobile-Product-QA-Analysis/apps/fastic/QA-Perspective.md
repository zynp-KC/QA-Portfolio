# QA Perspective: Fastic

A companion to Product-Analysis.md, looking at Fastic through a quality lens. This is
not a test suite (detailed cases live in Test-Cases.md, defects in Bug-Reports.md).
Its purpose is narrower and harder to copy: to show *how* I would approach testing
this app, where the risk is, and what I would automate versus test by hand.

## Risk-based testing approach

Not everything deserves equal test effort. For a subscription app that generates
health plans, I prioritize by cost of failure, using probability of failure against
impact of failure.

| Area | Probability | Impact | Priority |
|---|---|---|---|
| Health plan generation | High | Critical | **P0** |
| Payment / paywall | Medium | Critical | **P1** |
| Data persistence & personalization | High | High | **P1** |
| Input validation | Medium | High | **P2** |
| UI / interaction | Medium | Low | **P3** |

**Health plan generation (P0).** The app takes weight, goal, and health conditions
and produces a fasting and calorie plan. A wrong plan for the wrong user is a
potential health harm and a liability exposure, and the logic is complex enough to
fail, so this is the single highest-risk area: boundary values, contraindicated
combinations, and whether the plan actually changes for risky inputs.

**Payment / paywall (P1).** Failure here costs revenue and trust directly. Core
charging is usually well invested and rarely breaks, but Fastic's flow is unusually
complex (stacked discounts, a spin-wheel "63% off," consent steps), which raises the
risk in discount logic, restore-purchases, and cancellation paths.

**Data persistence & personalization (P1).** The app asks 39 questions and claims a
tailored experience. Whether that data is stored and actually applied is the app's
central promise and a directly testable behavior, and the observed defects here make
failure likely.

**Input validation (P2).** Weight, height, and goal inputs drive the plan, so
validation gaps feed straight into the P0 area. Boundary and negative testing here is
not optional.

**UI / interaction (P3).** Navigation, button placement, transitions. Real but
lower-severity: these affect experience, not safety or revenue.

## From product findings to quality risks

The observations in Product-Analysis.md are not just product remarks; each maps onto a
familiar QA category, which is what lets a test process own them. The asymmetric weight
warning is a boundary-validation gap; the repeated onboarding questions are a
state-persistence defect; the vegan-user-shown-chicken and gain-weight-user-shown-loss
issues are business-logic defects where output ignores input; and the app building the
same plan for a user who flagged diabetes or thyroid conditions is a safety-critical
logic gap. These are documented individually, in reproducible form, in Bug-Reports.md.
The point here is that naming the category turns each product weakness into something a
test suite can be held accountable for.

## Automated vs. manual: where each fits

Test effort is wasted if the wrong things are automated.

**Automate (deterministic, regression-worthy).** Input validation and boundary
conditions; the paywall and subscription flow (price display, trial state, close and
restore paths); permission allow/deny branches; and cross-screen data persistence
(does an answer given in onboarding survive into later screens without being re-asked).
On mobile these fit an Appium-based suite, with API-level checks where the backend is
reachable so plan-generation logic can be verified without driving the full UI each time.

**Test manually / exploratory (judgment-heavy).** Whether a generated plan is *correct
and safe* for a given profile needs human judgment against health logic, not a green
assertion. The same applies to the subjective quality of the onboarding flow. For the
highest-risk area, plan generation for edge-case profiles, I would run charter-driven
exploratory sessions aimed at discovering unknown failure modes rather than confirming
known ones.

The principle: automate what is stable and repeatable to guard against regressions; keep
human attention for correctness, safety, and discovery, where automation gives false
confidence.

## Scope limits

This view is iOS-only (iPhone 13) and front-end only: without backend access,
plan-generation logic can only be inferred from inputs and outputs, not verified at the
source. The paywall was examined up to, but not through, a real purchase, so payment,
renewal, and refund paths remain untested. These limits define exactly what a fuller
test effort would need to add next.