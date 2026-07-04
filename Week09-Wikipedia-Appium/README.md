# Week09 — Mobile Automation Testing: Wikipedia Android App

[![Week09 TypeScript Type Check](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/week09-type-check.yml/badge.svg)](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/week09-type-check.yml)

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
│   └── SearchPage.ts         # Search screen workflows
├── components/
│   └── SearchBar.ts          # Reusable search bar component
├── allure-results/           # Raw test results (gitignored)
├── allure-report/            # HTML report (gitignored)
├── wdio.conf.ts              # WebdriverIO + Appium configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

---

## Architecture

Page Object Model (POM) with inheritance and component composition:

```
BasePage
  └── SearchPage ── uses ──> SearchBar (component)
```

`BasePage` provides reusable actions: `waitForElement`, `click`, `setValue`, `swipe`.
`SearchPage` extends `BasePage` for workdlows and composes the `SearchBar` component for element locators.
`SearchBar` isolates search-related locators into a reusable, maintainable unit.

---

## Test Scenarios

| # | Test | Expected |
|---|---|---|
| 1 | Search with valid keyword ("Appium") | Results list displayed |
| 2 | Search with invalid keyword ("xyzxyzxyz123") | "Sonuç yok" empty state displayed |
| 3 | Swipe up on search results | Results still displayed after scroll |
| 4 | Swipe down after swiping up | Results still displayed after scroll |

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

## Key Implementation Notes

- `beforeEach` hook restarts the app before each test to ensure test isolation
- `waitForDisplayed()` used instead of `browser.pause()` for stable explicit waits
- Global `waitforTimeout: 10000` configured in `wdio.conf.ts`
- **Type safety:** `ChainablePromiseElement` type used instead of `any` in `BasePage`
- **Component architecture:** search locators extracted into a reusable `SearchBar` component
- **Strong assertions:** tests validate input text and result count, not just element visibility
- **Generic swipe utility:** `swipe(direction)` supports both up and down, calculated from screen size
- **Config management:** APK path externalized via `.env` (dotenv), no hardcoded paths
- **Flaky test resolved:** swipe gestures occasionally triggered the on-screen keyboard, injecting stray characters into the search field; fixed by calling `driver.hideKeyboard()` before swipe
- Screenshot captured automatically on test failure via `afterTest` hook

---

## CI/CD

A Github Actions workflows runs a TypeScript type-check (`tsc --noEmit`) on every push and pull request, catching type errors before they reach the main branch.

> **Note:** Appium tests require a real device or emulator and are run locally. They are not executed in CI, since standard Github-hosted runners have no physical device.

---

## Known Limitations

- Tests depend on Turkish locale strings (e.g. "Sonuç yok") — not localized for other languages
- `appium:noReset: true` speeds up runs but can carry state between sessions; mitigated with `beforeEach` app restart
- Onboarding screen handling relies on a `try/catch` block, since the screen appears inconsistently
- Mobile gestures (swipe, keyboard) are timing-sensitive by nature

---

## Future Improvements

- Cloud device farm integration (BrowserStack / AWS Device Farm) for CI execution
- Parallel execution across multiple devices
- Cross-device testing (different screen sizes and Android versions)
- Locale-independent selectors to remove language dependency