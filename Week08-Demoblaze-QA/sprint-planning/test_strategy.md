# Test Strategy — Demoblaze E-Commerce

- **Project:** Demoblaze E-Commerce
- **URL:** https://www.demoblaze.com
- **Date:** 2026-04-20
- **Prepared by:** Zeynep KC

---

## 1. Scope

### In Scope

| Module | Testing Type |
|---|---|
| Login / Authentication | Functional, Security, Negative |
| Product Catalog | Functional, UI|
| Cart | Functional, E2E |
| Place Order / Checkout | Functional, E2E, Negative |
| Contact Form | Functional, Negative |

### Out of Scope

| Module | Reason |
|---|---|
| About Us | Static content, low business risk |
| Performance Testing | Outside project scope |
| Mobile Testing | No mobile app available |

---

## 2. Test Types

- Functional Testing
- Negative Testing
- Cross-browser Testing
- Exploratory Testing
- API Testing
- Accessibility Testing
- End-to-End Testing

---

## 3. Test Environment

### Web
| Component | Details |
|---|---|
| URL | https://www.demoblaze.com |
| API | https://api.demoblaze.com |
| Browsers | Chrome, Firefox, Edge, Safari (via Playwright) |

---

## 4. Tools

| Tool | Purpose |
|---|---|
| JIRA | Bug reporting |
| Postman | API testing |
| Playwright | Test automation + Accessibility testing |
| axe-core | WCAG 2.1 AA accessibility scanning |
| Chrome DevTools | DOM inspection, network monitoring |
| GitHub | Documentation & version control |

---

## 5. Entry Criteria

- Demo environment is accessible
- Test user account is registered
- Test cases are prepared
- Postman environment variables are configured

---

## 6. Exit Criteria

- All P1 test cases executed
- All critical bugs reported
- API test collection completed
- Playwright automation suite passing
- Accessibility report generated
- Test summary report completed