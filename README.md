# QA Engineering Portfolio

[![Playwright Tests](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/playwright.yml)

A structured QA training portfolio with hands-on practice in Manual Testing, 
API Testing, SQL Validation, E2E Automation and Mobile Testing.

---

## 📊 Portfolio Stats
- 📋 Total Test Cases: 125+
- 🐛 Total Bug Reports: 26+
- 🤖 Automated Tests: 70 (across 3 browsers + Android)
- 📱 Apps Tested: X, TrendyolGo, WhatsApp, Spotify, FaceLab, ToonApp, OrangeHRM, Demoblaze, LinkedIn, Wikipedia
- 🔧 Platforms: Web · iOS · Android

---

## 🛠 Tools

Git & GitHub · Excel · JIRA · Postman · SQL · Playwright · Appium · WebdriverIO · Firebase Test Lab · Chrome DevTools · axe-core

---

## 📁 Project Structure
```
QA-Portfolio/
├── Day01-SDLC-STLC/
├── Day02-Login-TestCases/
├── Day03-Bug-Reports/
├── Day04-Test-Design-Techniques/
├── Week02-Advanced-QA/
├── Week03-API-Testing/
├── Week04-SQL/
├── Week05-Playwright-Automation/
├── Week06-Mobile-Testing/
├── Week07-OrangeHRM/
├── Week08-Demoblaze-QA/
├── Week09-Wikipedia-Appium/
└── open-source-contributions/
```

---

## 🌍 Open Source Contributions & Real-World Testing

| Project | Issue | Contribution |
|---|---|---|
| KiwiTCMS | [#4066 — Datetime formatting not human-friendly](https://github.com/kiwitcms/Kiwi/issues/4066) | Reproduced issue on public test environment, provided steps to reproduce with expected/actual results |
| KiwiTCMS | [#4060 — Missing entries in Change History for Test Run](https://github.com/kiwitcms/Kiwi/issues/4060) | Reproduced issue on public test environment, documented missing audit trail entries |
| Appwrite | [#11857 — queries[] shorthand syntax returns 400 Syntax Error](https://github.com/appwrite/appwrite/issues/11857) | Discovered and reported API query syntax inconsistency on Appwrite Cloud v1.9.0. |
| WordPress iOS | [#25493 — About screen X link opens blank webview](https://github.com/wordpress-mobile/WordPress-iOS/issues/25493) | Discovered and reported deep link bug through exploratory testing on iPhone 13 |
| johnpapa/shopathome | [PR #310 — Playwright E2E test suite](https://github.com/johnpapa/shopathome/pull/310) | Added POM, custom fixtures, accessibility (axe-core), mobile and CI/CD tests. 18/18 passing on Chromium |
| LinkedIn iOS | LI-MOB-001 — Easy Apply button label clipped in portrait mode (iOS 26.4.2) | Independently discovered UI regression, cross-platform verified (Android + landscape unaffected), root cause hypothesized, reported to LinkedIn |
| BetaTesting.com | Paid Beta Test (May 2026) | Identified critical backend provisioning bug during multi-session eSIM test on Android | ✅ Completed |

---

## 📅 Weekly Progress 

### Week 1 — Manual Testing Foundations
- Test case design using BVA & Equivalence Partitioning
- Bug reporting with severity & priority analysis
- SDLC & STLC documentation

### Week 2 — Advanced Manual QA & JIRA
- Test planning, regression & smoke testing
- Bug lifecycle management with JIRA
- Agile & Scrum fundamentals

### Week 3 — API Testing
- GET, POST, PUT, DELETE methods with Postman
- Status code & JSON response validation
- Mini API test checklist

### Week 4 — SQL & Database Validation
- SELECT, WHERE, AND/OR, JOIN queries
- Aggregation functions (COUNT, SUM)
- Login failure investigation case study

### Week 5 — E2E Automation with Playwright 
- 6 automated tests across 3 browsers (Chromium, Firefox, WebKit)
- Login happy path & 3 negative scenarios
- Page Object Model architecture
- CI/CD integration with GitHub Actions
- Automated screenshots & HTML reports

### Week 6 — Mobile Testing
- Manual login test cases for X (Twitter) on iOS
- Real bug reporting with Jira (TrendyolGo — MATP-1)
- Firebase Test Lab - Robo test on real Android device (119 actions)
- Android vs iOS comparison (WhatsApp - 10+ differences)
- Exploratory testing (Spotify, FaceLab, ToonApp)
- Cross-platform bug reporting (FaceLab MATP-2, ToonApp TOONAPP-01/02)

### Week 7 — OrangeHRM Comprehensive QA Project
- Full test plan with risk analysis and role-based access testing
- 45 test cases (Login, PIM, Leave Management)
- 10 bug reports with screenshots and severity analysis
- Cross-platform mobile testing (iOS vs Android)
- API testing — full CRUD with Postman (8 endpoints)
- 21 Playwright automated tests across 3 browsers
- Page Object Model architecture + CI/CD integration

### Week08 — Demoblaze E-Commerce QA Capstone 
- Sprint planning with user stories, test strategy and risk matrix
- BDD scenarios with Gherkin (4 feature files, 25+ scenarios)
- Traceability matrix (User Story ⇨ BDD ⇨ Test Case)
- 40 manual test cases across 4 modules
- 8 bug reports with severity analysis
- API testing — 12 endpoints with Postman + environment variables
- 46 Playwright automated tests across 3 browsers
- Accessibility testing with axe-core (WCAG 2.1 AA — 10 violations)
- Test metrics, defect analysis and release sign-off

### Week09 — Mobile Automation with Appium ✅
- Real device E2E automation on Android (Samsung Galaxy A21s)
- Wikipedia Alpha app — search flow automation
- Page Object Model: BasePage + SearchPage with inheritance
- 3 test scenarios: valid search, invalid search (empty state), swipe
- `waitForDisplayed()` over `browser.pause()` — stable explicit waits
- `beforeEach` app restart for full test isolation
- Allure reporter with screenshot on failure
- WebdriverIO + UiAutomator2 + TypeScript

---

## 🎯 Goal

To build strong QA foundations and grow into a well-rounded QA Engineer
with skills in Manual Testing, API Testing, SQL, Test Automation, and Mobile Testing.