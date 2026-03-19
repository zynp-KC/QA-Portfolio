[![Playwright Tests](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/playwright.yml)

# Week 05 — Playwright Automation

SauceDemo web uygulaması için yazılmış end-to-end test projesi.

##  Test Senaryoları

| Test | Dosya | Sonuç |
|------|-------|-------|
| Anasayfa başlık doğrulama | day01.spec.js | ✅ |
| Geçerli kullanıcı ile login | login.spec.js | ✅ |
| Login sonrası ürün listesi | login.spec.js | ✅ |
| Yanlış şifre ile login | login-negative.spec.js | ✅ |
| Boş kullanıcı adı ile login | login-negative.spec.js | ✅ |
| Kilitli kullanıcı ile login | login-negative.spec.js | ✅ |

##  Proje Yapısı
```
Week05-Playwright-Automation/
├── tests/
│   ├── day01.spec.js
│   ├── login.spec.js
│   └── login-negative.spec.js
├── pages/
│   └── LoginPage.js
├── screenshots/
├── .github/workflows/
│   └── playwright.yml
└── playwright.config.js
```

##  Çalıştırma
```bash
npm install
npx playwright install
npx playwright test
```

##  Tarayıcılar

- Chromium
- Firefox
- WebKit (Safari)

##  Ekran Görüntüleri

`screenshots/` klasöründe test sonuçları otomatik kaydedilir.