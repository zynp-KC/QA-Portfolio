# Bug Report Summary — OrangeHRM
- **Date:** 2026-04-06
- **Tester:** Zeynep KC
- **Environment:** https://opensource-demo.orangehrmlive.com

---

## Bug List

| ID | Module | Summary | Severity | Priority | Status |
|---|---|---|---|---|---|
| BUG-01 | UI / Localization | Navigation menu displays şn French while dashboard remains in English. No language change option found. | Medium | P3 | Open |
| BUG-02 | Login / Forgot Password | 504 Gateway Time-Out error on forgot password flow | High | P2 | Open |
| BUG-03 | PIM / Add Employee | Special characters (!@#$%) accepted in employee name fields | Medium | P2 | Open |
| BUG-04 | Leave / Assign Leave | Leave balance goes negative — system warns but does not prevent assignment. Balance reached -21.00 | High | P1 | Open |
| BUG-05 | Login / Authentication | Multiple failed login attempts do not lock the account — brute force vulnerability | High | P1 | Open |

---

## Improvement Suggestions

| ID | Module | Summary |
|---|---|---|
| IMP-01 | PIM / Add Employee | Name fields should restrict numeric characters for data quality |
| IMP-02 | Login | Password show/hide button absent - UX improvement needed |

---

## Evidence

| Bug ID | Screenshot |
|---|---|
| BUG-01 | screenshots/bug-01-localization.PNG |
| BUG-02 | screenshots/bug-02-504-forgot-password.PNG |
| BUG-03 | screenshots/bug-03-special-chars-name.png |
| BUG-04 | screenshots/bug-04-negative-leave-balance.png |