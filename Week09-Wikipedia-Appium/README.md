# Week09 — Mobile Automation Testing: Wikipedia Android App

Appium + WebdriverIO + TypeScript ile Android cihazda gerçek uygulama üzerinde E2E test otomasyonu.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Appium | 3.4.2 | Mobile automation server |
| WebdriverIO | 9.x | Test runner & browser API |
| UiAutomator2 | 4.2.9 | Android automation driver |
| TypeScript | 5.x | Language |
| Mocha | - | Test framework |
| Allure | - | Test reporting |

---

## Project Structure

```
Week09-Wikipedia-Appium/
├── tests/
│   └── search.spec.ts        # Test scenarios
├── pages/
│   ├── BasePage.ts           # Common actions (click, setValue, swipe)
│   └── SearchPage.ts         # Search screen elements & actions
├── allure-results/           # Raw test results (gitignored)
├── allure-report/            # HTML report (gitignored)
├── wdio.conf.ts              # WebdriverIO + Appium configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

---

## Architecture

Page Object Model (POM) with inheritance:

```
BasePage
  └── SearchPage
```

`BasePage` provides reusable actions: `waitForElement`, `click`, `setValue`, `swipeUp`.
`SearchPage` extends `BasePage` and defines screen-specific elements and workflows.

---

## Test Scenarios

| # | Test | Expected |
|---|---|---|
| 1 | Search with valid keyword ("Appium") | Results list displayed |
| 2 | Search with invalid keyword ("xyzxyzxyz123") | "Sonuç yok" empty state displayed |
| 3 | Swipe up on search results | Results still displayed after scroll |

---

## Setup

### Prerequisites

- Node.js v24+
- Java JDK 25+
- Android Studio (SDK Platform-Tools)
- Android device with USB Debugging enabled
- Appium 3.x + UiAutomator2 driver

### Environment Variables

```
ANDROID_HOME = C:\Users\{user}\AppData\Local\Android\Sdk
JAVA_HOME    = C:\Program Files\Java\jdk-25.0.2
```

### Install

```bash
npm install
appium driver install uiautomator2
```

### Run Tests

```bash
# Start Appium server (Terminal 1)
appium

# Run tests (Terminal 2)
npx wdio run wdio.conf.ts
```

### Generate Allure Report

```bash
npx allure generate allure-results --clean
npx allure open
```

---

## Device

| Field | Value |
|---|---|
| Device | Samsung Galaxy A21s |
| OS | Android 12 |
| App | Wikipedia Alpha (org.wikipedia.alpha) |

---

## Key Implementation Notes

- `beforeEach` hook restarts the app before each test to ensure test isolation
- `waitForDisplayed()` used instead of `browser.pause()` for stable waits
- Global `waitforTimeout: 10000` configured in `wdio.conf.ts`
- `driver.hideKeyboard()` called before swipe to prevent character injection
- Screenshot captured automatically on test failure via `afterTest` hook