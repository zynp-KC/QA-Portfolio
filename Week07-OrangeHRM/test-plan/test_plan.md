# Test Plan - OrangeHRM
- **Version:** 1.0
- **Date:** 2025-04-05
- **Prepared by:** Zeynep KC
- **Environment:** Demo Web + Mobile (iOS & Android)

---

## 1. Introduction

OrangeHRM is a Human Resource Management application used by HR administrators and company employess to manage employee data, leave requests, recruitment processes and performance evaluations.

Two primary user roles exist with different access levels:

| Module | Admin | Employee |
|--------|-------|----------|
| PIM          | ✅    | ❌ |
| Leave        | ✅    | ✅ |
| Recruitment  | ✅    | ❌ |
| My Info      | ✅    | ✅ |
| Time         | ✅    | ✅ |
| Performance  | ✅    | ✅ |
| Directory    | ✅    | ✅ |
| Claim        | ✅    | ✅ |
| Buzz         | ✅    | ✅ |
| Maintenance  | ✅    | ❌ |

---

# 2. Objectives

- Validate core HR functionalities work as expected
- Identify defects in critical user flows
- Verify role-based access control (Admin vs Employee)
- Verify cross-platform consistency (Web + Mobile, iOS + Android)
- Ensure data integrity in employee management operations

---

## 3. Scope

### In Scope

| Module | Testing Type |
|---|---|
| Login / Authentication | Functional, Security, Cross-platform |
| PIM - Employee Management | Functional, Data Validation, Role-based |
| Leave Management | Functional, Business Rules, Edge Cases |
| Recritment | Functional, End-to-End Flow |

### Out of Scope

| Module | Reason |
|---|---|
| Buzz | Low business risk — social feed only |
| Maintenance | System-level admin module, not end-user |
| Performance testing | Outside project scope |
| Payment processing | Not available in demo environment |

---

## 4. Test Environment

### Web
| Component | Details |
|-----------|---------|
| URL | https://opensource-demo.orangehrmlive.com |
| Admin credentials | Admin / admin123 |
| Employee credentials | testemployee / Test1234! |
| Browsers | Chrome, Firefox, Edge, Opera, Safari (via Playwright) |

### Mobile
| Platform | Device |
|----------|--------|
| iOS | iPhone 13 |
| Android | Samsung Galaxy A21s |

---

## 5. Test Types

- Functional Testing
- Negative Testing
- Role-based Access Control Testing
- Cross-browser Testing
- Cross-platform Testing (Web vs Mobile)
- Exploratory Testing

---

## 6. Risk Analysis

| Risk | Likelihood | Impact | Priority |
|------|------------|--------|----------|
| Employee data loss or corruption | Medium | High | P1 |
| Leave balance miscalculation | Medium | High | P1 |
| Login security vulnerabilities | Low | High | P1 |
| Unauthorized role-based access | Low | High | P1 |
| Recruitment pipeline data loss | Medium | Medium | P2 |
| Cross-browser UI inconsistencies | High | Medium | P2 |
| My Actions / Reminders data loss | Medium | Medium | P2 | 
| Partial localization errors | High | Low | P3 |

---

## 7. Entry Criteria

- Demo environment is accessible
- Admin and Employee test credentials are valid
- Test cases are prepared
- Devices are available (iPhone 13, Samsung Galaxy A21s)

---

## 8. Exit Criteria

- All P1 test cases executed
- All critical bugs reported
- Cross-platform comparison documented
- Test summary report completed

---

## 9. Deliverables

- [ ] Test Cases - Login, PIM, Leave, Recruitment
- [ ] Bug Reports (JIRA format)
- [ ] Mobile Comparison Report (iOS vs Android)
- [ ] API Test Collection (Postman)
- [ ] Playwright Automation Suite
- [ ] Test Summary Report

---

## 10. Known Issues (Observed During Kick-off)

| ID | Summary | Severity |
|---|---|---|
| BUG-01 | Partial localization — navigation menu displays in French while dashboard remains in English. No language change option found in UI. | Medium |

---

## 11. Test Limitations

- Employee self-service role testing is based on manually 
  created test account in demo environment
- Demo environment is shared — other users may affect 
  test data or system language settings
- Mobile testing limited to one iOS and one Android device

---

## 12. Tools

| Tool | Purpose |
|---|---|
| JIRA | Bug reporting |
| Postman | API testing |
| Playwright | Test automation |
| Chrome DevTools | DOM inspection, network monitoring |
| GitHub | Documentation & version control |

