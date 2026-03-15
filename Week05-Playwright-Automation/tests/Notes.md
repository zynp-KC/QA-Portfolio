# Day 01 — Playwright Kurulum & İlk Test


## Öğrendiklerim
- Playwright nedir: Tarayıcıyı kod ile kontrol eden bir test aracı
- `npm init playwright@latest` ile proje kurulumu
- `page.goto()` — sayfaya git
- `page.title()` — sayfa başlığını al
- `expect(page).toHaveTitle()` — başlık doğrulama (assertion)
- `--project=chromium` — sadece Chrome'da çalıştır

## Çalıştırma
```bash
npx playwright test day01.spec.js --project=chromium
npx playwright show-report
```

## Sonuç
- 1 test yazıldı, 1 passed
- SauceDemo anasayfası başarıyla doğrulandı