# Week08 — Demoblaze E-Commerce QA Capstone

A comprehensive QA capstone project covering the full testing lifecycle for Demoblaze — an e-commerce demo application.

---

## Project Overview

| | |
|---|---|
| **Application** | Demoblaze E-Commerce |
| **URL** | https://www.demoblaze.com |
| **API** | https://api.demoblaze.com |
| **Test Types** | Manual, BDD, API, Automation, Accessibility |

---

## 📋 Test Scope

| Module | Test Cases | Bugs Found |
|---|---|---|
| Authentication | 12 | 1 |
| Product Catalog | 10 | 1 |
| Cart | 10 | 3 |
| Checkout | 8 | 2 |
| Contact | - | 2 |
| **Total** | **40** | **9** |

---

## 📦 Deliverables

| Deliverable | Status |
|---|---|
| Sprint Planning (User Stories, Test Strategy, Risk Matrix) | ✅ |
| BDD Scenarios (4 feature files) | ✅ |
| Traceability Matrix | ✅ |
| Manual Test Cases (40) | ✅ |
| Bug Reports (8) | ✅ |
| API Test Collection (12 endpoints) | ✅ |
| Playwright Automation (46 tests) | ✅ |
| Accessibility Report (WCAG 2.1 AA) | ✅ |
| Test Execution Report | ✅ |
| Defect Metrics | ✅ |
| Release Sign-Off | ✅ |

---

## 🐛 Bug Reports

| ID | Module | Summary | Severity | Priority |
|---|---|---|---|---|
| BUG-01 | Product Catalog | Previous button changes product order | Medium | P2 |
| BUG-02 | Cart / Checkout | Guest can checkout without login | High | P1 |
| BUG-03 | Checkout | Credit card accepts letters | High | P1 |
| BUG-04 | Checkout | Credit card accepts short numbers | High | P1 |
| BUG-05 | Cart | Same product added unlimited times | Medium | P2 |
| BUG-06 | Cart | Product not clickable from cart page | Low | P3 |
| BUG-07 | Contact | Empty form submission accepted | Medium | P2 |
| BUG-08 | Contact | Form data persists after closing modal | Low | P3 |

---

## 🔌 API Testing

| Endpoint | Method | Result |
|---|---|---|
| /signup | POST | ✅ Pass |
| /signup (duplicate) | POST | ⚠️ Bug — 409 expected |
| /login | POST | ✅ Pass |
| /login (invalid) | POST | ⚠️ Bug — 401 expected |
| /entries | GET | ✅ Pass |
| /bycat | POST | ✅ Pass |
| /view | POST | ✅ Pass |
| /addtocart | POST | ✅ Pass |
| /viewcart | POST | ✅ Pass |
| /deleteitem | POST | ✅ Pass |
| /deletecart | POST | ✅ Pass |
| /viewcart (invalid token) | POST | ⚠️ Bug — 401 expected |

---

## 🤖 Playwright Automation

[![Playwright Tests](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/playwright.yml)

| Spec File | Tests | Result |
|---|---|---|
| auth.spec.js | 12 | ✅ 12/12 |
| catalog.spec.js | 15 | ✅ 15/15 |
| cart.spec.js | 9 | ✅ 9/9 |
| checkout.spec.js | 6 | ✅ 6/6 |
| accessibility.spec.js | 4 | ✅ 4/4 |
| **Total** | **46** | **✅ 46/46** |

**Browsers:** Chromium · Firefox · WebKit

### Run Tests
```bash
npm install
npx playwright install
npx playwright test
```

---

## ♿ Accessibility Testing

| Page | Violations | Critical | Serious |
|---|---|---|---|
| Home | 3 | 1 | 2 |
| Product Detail | 3 | 1 | 2 |
| Cart | 2 | 1 | 1 |
| Checkout Modal | 2 | 1 | 1 |

**Standard:** WCAG 2.1 AA

---

## 📁 Project Structure

```
Week08-Demoblaze-QA/
├── sprint-planning/
│   ├── user_stories.md
│   ├── test_strategy.md
│   ├── risk_matrix.md
│   └── traceability_matrix.md
├── bdd-scenarios/
│   ├── auth.feature
│   ├── product-catalog.feature
│   ├── cart.feature
│   └── checkout.feature
├── test-cases/
│   ├── TC_auth.md
│   ├── TC_catalog.md
│   ├── TC_cart.md
│   └── TC_checkout.md
├── bug-reports/
│   ├── BUG-01.md → BUG-08.md
│   └── bug_summary.md
├── api-testing/
│   ├── Demoblaze_API_Tests.json
│   ├── environments/
│   └── api_test_report.md
├── playwright-automation/
│   ├── tests/
│   ├── pages/
│   ├── fixtures/
│   └── playwright.config.js
├── accessibility-testing/
│   └── accessibility_report.md
└── test-metrics/
├── test_execution_report.md
├── defect_metrics.md
└── release_signoff.md
```

---

## 🛠️ Tools Used

| Tool | Purpose |
|---|---|
| Postman | API testing |
| Playwright | Test automation |
| axe-core | Accessibility testing|
| Chrome DevTools | DOM inspection |
| Github Actions | CI/CD |