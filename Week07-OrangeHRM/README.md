# Week07 — OrangeHRM QA Project

A comprehensive QA project covering manual testing, exploratory testing,
API testing, mobile testing and test automation for OrangeHRM —
an open-source Human Resource Management application.

---

## 🎯 Project Overview

| | |
|---|---|
| **Application** | OrangeHRM |
| **Environment** | https://opensource-demo.orangehrmlive.com |
| **Platforms** | Web, iOS (iPhone 13), Android (Samsung Galaxy A21s) |
| **Test Types** | Manual, Exploratory, API, Mobile, Automation |

---

## 📋 Test Scope

| Module | Test Cases | Status |
|---|---|---|
| Login / Authentication | 15 | ✅ Completed |
| PIM — Employee Management | 15 | ✅ Completed |
| Leave Management | 15 | ✅ Completed |

---

## 📦 Deliverables

| Deliverable | Status |
|---|---|
| Test Plan | ✅ |
| Exploratory Charters (3) | ✅ |
| Test Cases (45) | ✅ |
| Bug Reports (10) | ✅ |
| Mobile Comparison Report | ✅ |
| API Test Collection (Postman) | ✅ |
| Playwright Automation Suite | ✅ |

---

## 🐛 Bug Reports

| ID | Module | Severity | Priority |
|---|---|---|---|
| BUG-01 | UI / Localization | Medium | P3 |
| BUG-02 | Login / Forgot Password | High | P2 |
| BUG-03 | PIM / Add Employee | Medium | P2 |
| BUG-04 | Leave / Assign Leave | High | P1 |
| BUG-05 | Login / Authentication | High | P1 |
| BUG-06 | Mobile / Android | Medium | P2 |
| BUG-07 | Mobile / Android | Medium | P2 |
| BUG-08 | Mobile / iOS | High | P2 |
| BUG-09 | Mobile / iOS | Low | P3 |
| BUG-10 | Mobile / iOS | Low | P3 |

---

## 🔌 API Testing

| Request | Method | Status |
|---|---|---|
| Leave Types | GET | ✅ 200 OK |
| Employees | GET | ✅ 200 OK |
| Employee by ID | GET | ✅ 200 OK |
| Create Employee | POST | ✅ 200 OK |
| Update Employee | PUT | ✅ 200 OK |
| Delete Employee | DELETE | ✅ 200 OK |
| Leave Requests | GET | ✅ 200 OK |
| Employees — Unauthorized | GET | ✅ 401 |

---

## 🤖 Playwright Automation

[![Playwright Tests](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/playwright.yml)

| Test | File | Result |
|---|---|---|
| Successful login with valid credentials | login.spec.js | ✅ |
| Successful logout after login | login.spec.js | ✅ |
| Login with empty username | login-negative.spec.js | ✅ |
| Login with empty password | login-negative.spec.js | ✅ |
| Login with both fields empty | login-negative.spec.js | ✅ |
| Login with invalid credentials | login-negative.spec.js | ✅ |
| Login with valid username and wrong password | login-negative.spec.js | ✅ |

**Browsers:** Chromium · Firefox · WebKit (Safari)

### Run Tests
```bash
npm install
npx playwright install
npx playwright test
```

---

## 📁 Project Structure

```
Week07-OrangeHRM/
├── test-plan/
│   ├── test_plan.md
│   ├── exploratory_charter_01_login.md
│   ├── exploratory_charter_02_pim.md
│   └── exploratory_charter_03_leave.md
├── test-cases/
│   ├── test_cases_login.md
│   ├── test_cases_pim.md
│   └── test_cases_leave.md
├── bug-reports/
│   ├── BUG-01.md — BUG-10.md
│   ├── bug_summary.md
│   └── screenshots/
├── mobile-testing/
│   ├── mobile_comparison_report.md
│   └── screenshots/
├── api-testing/
│   └── OrangeHRM_API_Tests.json
└── playwright-automation/
├── tests/
│   ├── login.spec.js
│   └── login-negative.spec.js
├── pages/
│   └── LoginPage.js
└── playwright.config.js
```

---

## 🛠 Tools Used

| Tool | Purpose |
|---|---|
| Postman | API testing |
| Playwright | Test automation |
| Chrome DevTools | DOM inspection |
| JIRA | Bug reporting format |
| GitHub Actions | CI/CD |
| iPhone 13 | iOS mobile testing |
| Samsung Galaxy A21s | Android mobile testing |