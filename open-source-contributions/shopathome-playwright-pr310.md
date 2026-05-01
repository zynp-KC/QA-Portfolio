# shopathome — Playwright E2E Test Suite

## Project
**johnpapa/shopathome** — Multi-framework e-commerce app (Angular, React, Vue, Svelte)
⭐ 135 stars | Microsoft Developer Advocate John Papa'nın projesi

## PR
🔗 [#310 — test: add comprehensive Playwright e2e suite with accessibility and mobile coverage](https://github.com/johnpapa/shopathome/pull/310)

## Status
🟡 Open — awaiting review

## What I Did
Mevcut tek test dosyasının üzerine kapsamlı bir E2E test suite ekledim.
18/18 tests passing on Chromium.

## Changes
| Dosya | Açıklama |
|-------|----------|
| `e2e/pages/BasePage.ts` | Page Object Model — base class |
| `e2e/pages/HomePage.ts` | Page Object Model — homepage actions |
| `e2e/fixtures/index.ts` | Custom Playwright fixture |
| `e2e/accessibility.spec.ts` | WCAG2A/2AA audit with axe-core |
| `e2e/mobile.spec.ts` | Mobile viewport & responsiveness |
| `e2e/navigation.spec.ts` | Navigation flow tests using POM |
| `playwright.config.ts` | Firefox, WebKit, Pixel 5, iPhone 12 eklendi |
| `.github/workflows/playwright.yml` | CI/CD pipeline |
| `tsconfig.json` | TypeScript support |

## Accessibility Findings
axe-core ile Angular app'te 4 serious violation tespit edildi:
- `color-contrast` — kontrast oranı yetersiz (4.37, beklenen 4.5:1)
- `link-name` — Angular logo linki erişilebilir metin içermiyor
- `list` — ul içinde direkt a elementi var, li olmalı
- `nested-interactive` — iç içe interactive element (homepage only)

## Skills Demonstrated
- Page Object Model (POM)
- Custom Playwright Fixtures
- Accessibility Testing (axe-core, WCAG2A/2AA)
- Mobile Responsiveness Testing
- GitHub Actions CI/CD
- Test Result Analysis
