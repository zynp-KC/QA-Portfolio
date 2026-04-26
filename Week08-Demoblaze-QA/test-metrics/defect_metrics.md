# Defect Metrics — Demoblaze E-Commerce

- **Date:** 2026-04-27
- **Tester:** Zeynep KC

---

## Bug Distribution by Module

| Module | Total Bugs | Critical | High | Medium | Low |
|---|---|---|---|---|---|
| Authentication | 1 | 0 | 1 | 0 | 0 |
| Product Catalog | 1 | 0 | 0 | 1 | 0 |
| Cart | 3 | 0 | 1 | 1 | 1 |
| Checkout | 2 | 0 | 2 | 0 | 0 |
| Contact | 2 | 0 | 0 | 1 | 1 |
| API | 4 | 0 | 0 | 0 | 0 |
| Accessibility | 10 | 4 | 0 | 6 | 0 |
| **Total** | **23** | **4** | **4** | **9** | **2** |

---

## Bug Distribution by Severity

| Severity | Count | Percentage |
|---|---|---|
| Critical | 4 | 17% |
| High | 4 | 17% |
| Medium | 9 | 39% |
| Low | 2 | 9% |
| API Issues | 4 | 17% |
| **Total** | **23** | **100%** |

---

## Bug Status

| Status | Count |
|---|---|
| Open | 23 |
| Fixed | 0 |
| Closed | 0 |

---

## Key Findings

- Checkout module has the most critical bugs — credit card validation missing
- Guest checkout without authentication is a major security concern
- All pages fail WCAG 2.1 AA accessibility standards
- API does not follow REST standards for error responses