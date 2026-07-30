# Risk Analysis: Fastic

This looks at Fastic's issues as business risks rather than test priorities (test
prioritization is covered in QA-Perspective.md). Each risk ties an observed problem
to its likely business consequence and a mitigation. Details and evidence are in
Product-Analysis.md and Bug-Reports.md.

| Risk | Likelihood | Business impact | Mitigation |
|---|---|---|---|
| Health and legal liability: fasting or calorie plans are generated for contraindicated users (underweight, diabetes) with only a passive warning | Medium | Critical (user harm, potential legal action, reputation damage) | Gate or adapt the plan for flagged conditions; do not proceed with a warning alone |
| Loss of trust and retention: the "personalized" plan is identical for all users (BUG-001), onboarding answers are unnecessarily requested again (BUG-002), and the selected goal is ignored during onboarding (BUG-003) | High | High (churn, poor reviews, weak word of mouth) | Ensure onboarding data is consistently reused across personalization features and applied to generated plans |
| Brand damage: guilt-based onboarding questions and exaggerated "effortless" claims conflict with a wellness brand | Medium | High (app-store rating, long-term credibility) | Review onboarding copy against UX writing and legal/compliance guidelines; replace guilt-based messaging with supportive language |
| Conversion vs. long-term revenue: an aggressive, trial-free paywall shown before any real value | High | Medium (short-term conversion gains offset by higher churn and refunds) | Deliver a genuine value moment before the paywall; consider a trial |

**Likelihood:** 
- High = easily reproducible or affects most users 
- Medium = occurs under specific conditions
- Low = uncommon scenario.

**Business impact:** 
- Critical = user safety or legal exposure 
- High = significant revenue or reputation effect
- Medium = measurable but recoverable effect.

## Highest-priority risk

The health and legal liability risk carries the greatest downside. Its likelihood is
only medium, but its impact is critical and hard to reverse: one inappropriate plan recommendation for a
contraindicated user may expose the company to legal and reputational risk. It should
be addressed before the trust and conversion risks, even though those are more likely
to occur.