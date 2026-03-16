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



# Day 02 — Locators + Login Testi

## Öğrendiklerim
- `page.fill('#id', 'değer')` — CSS selector ile input doldur
- `page.click('#id')` — CSS selector ile tıkla
- `getByPlaceholder()` — placeholder'a göre element bul
- `getByRole('button', { name: '...' })` — role ve isme göre bul
- `expect(page).toHaveURL()` — URL doğrulama
- `expect(locator).toBeVisible()` — element görünür mü?

## Hata & Çözüm
- `getByLabel()` çalışmadı → SauceDemo'da label elementi yok
- `getByPlaceholder()` ile çözdük
- `getByPlaceHolder` (büyük H) → yazım hatası, küçük h olmalı

## Sonuç
- 2 test yazıldı, 2 passed ✅
- SauceDemo login happy path doğrulandı