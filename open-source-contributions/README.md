# 🌍 Open Source Contributions

Contributions to real-world open source projects and production applications through exploratory testing, API investigation, and code contribution.

---

## Contribution Overview

| Project | Type | Area | Status |
|---|---|---|---|
| KiwiTCMS [#4066](https://github.com/kiwitcms/Kiwi/issues/4066) | Bug Reproduction | UI / Date Formatting | 🟡 Open |
| KiwiTCMS [#4060](https://github.com/kiwitcms/Kiwi/issues/4060) | Bug Reproduction | Audit Trail / History | 🟡 Open |
| Appwrite [#11857](https://github.com/appwrite/appwrite/issues/11857) | API Bug Discovery | Query Syntax Inconsistency | 🟡 Open |
| WordPress iOS [#25493](https://github.com/wordpress-mobile/WordPress-iOS/issues/25493) | Mobile Exploratory | Deep Link / Navigation | 🟡 Open |
| johnpapa/shopathome [PR #310](https://github.com/johnpapa/shopathome/pull/310) | Code Contribution | E2E / Accessibility / CI | 🟡 Awaiting Review |
| LinkedIn iOS LI-MOB-001 | Real-World Bug Report | Mobile UI / Localization | ✅ Escalated to Engineering |

---

## KiwiTCMS — #4066
Datetime values across all search pages (Test Plans, Cases, Runs, Bugs) displayed in raw ISO 8601 format instead of human-readable format. Reproduced on public environment, documented all affected pages.
→ [Full report](./kiwitcms-issue-4066.md)

## KiwiTCMS — #4060
Adding or deleting a Test Case from a Test Run was not logged in Change History — breaking full audit traceability. Reproduced and documented with step-by-step evidence.
→ [Full report](./kiwitcms-issue-4060.md)

## Appwrite — #11857
Discovered that the shorthand `queries[]=limit(1)` syntax returns `400 Bad Request` on the Users endpoint while the verbose JSON format works — an undocumented inconsistency verified via Postman.
→ [Full report](./appwrite-issue-11857.md)

## WordPress iOS — #25493
Deep link bug found through exploratory testing on iPhone 13: tapping the X (@WordPressiOS) link on the About screen opens a blank webview instead of the X app or Safari. The "News" link on the same screen works correctly.
→ [Full report](./wordpress-ios-issue-25493.md)

## johnpapa/shopathome — PR #310
Added a full Playwright E2E suite to a Microsoft Developer Advocate's multi-framework e-commerce app: POM architecture, custom fixtures, axe-core accessibility audit (4 WCAG violations found), mobile viewports, and GitHub Actions CI/CD. 18/18 tests passing.
→ [Full report](./shopathome-playwright-pr310.md)

## LinkedIn iOS — LI-MOB-001 ✅
"Kolay Başvuru" (Easy Apply) button label vertically clipped in portrait mode on iPhone 13. Cross-verified: landscape ✅, Android ✅, iOS portrait ❌. Root cause hypothesized as a fixed height constraint not adapting to Turkish locale string length. Reported to LinkedIn Support — **confirmed and escalated to LinkedIn Engineering** (Ticket #260510-013048, May 13, 2026).
→ [Full report](./real-world-bugs/LinkedIn-iOS-EasyApply-Clip/bug_report.md)