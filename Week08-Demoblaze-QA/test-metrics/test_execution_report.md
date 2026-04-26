# Test Execution Report — Demoblaze E-Commerce

- **Date:** 2026-04-27
- **Tester:** Zeynep KC
- **Environment:** https://www.demoblaze.com
- **Browser:** Chrome, Firefox, WebKit

---

## Manuel Test Execution Summary

| Module | Total | Pass | Fail | Blocked |
|---|---|---|---|---|
| Authentication | 12 | 10 | 2 | 0 |
| Product Catalog | 10 | 9 | 1 | 0 |
| Cart | 10 | 7 | 3 | 0 |
| Checkout | 8 | 4 | 4 | 0 |
| **Total** | **40** | **30** | **10** | **0** |

---

## Playwright Automation Summary

| Spec File | Tests | Pass | Fail |
|---|---|---|---|
| auth.spec.js | 12 | 12 | 0 |
| catalog.spec.js | 15 | 15 | 0 |
| cart.spec.js | 9 | 9 | 0 |
| checkout.spec.js | 6 | 6 | 0 |
| accessibility.spec.js | 4 | 4 | 0 |
| **Total** | **46** | **46** | **0** |

---

## Overall Results

| Type | Total | Pass | Fail | Pass Rate |
|---|---|---|---|---|
| Manual | 40 | 30 | 10 | 75% |
| Automation | 46 | 46 | 0 | 100% |

---

## Failed Test Cases

| TC | Title | Reason |
|---|---|---|
| Auth TC-008 | Logout | Known bug — logout button hidden |
| Auth TC-009 | Login empty password | No validation warning displayed |
| Catalog TC-007 | Previous button | Known bug — product order changes |
| Cart TC-006 | Add without login | Known bug — guest checkout allowed |
| Cart TC-007 | Add same product twice | No quantity limit |
| Cart TC-009 | Cart persists after refresh | Intermittent behavior |
| Checkout TC-002 | Empty form | Known bug — form accepted |
| Checkout TC-003 | Invalid credit card | Known bug — letters accepted |
| Checkout TC-004 | Short credit card | Known bug — short number accepted |
| Checkout TC-005 | Only name filled | Known bug — form accepted |