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



# Day 03 — Assertions + Negatif Testler

## Öğrendiklerim
- Negatif test nedir: Sistemin hatalı durumları doğru yönetip yönetmediğini test etmek
- `getByText()` — sayfadaki metne göre element bul
- `toBeVisible()` — elementin görünür olduğunu doğrula
- `ignoreHTTPSErrors: true` — SSL sertifika hatalarını atla

## Test Senaryoları
| Senaryo | Beklenen Sonuç |
|--------|---------------|
| Yanlış şifre | "Username and password do not match" mesajı |
| Boş kullanıcı adı | "Username is required" mesajı |
| Kilitli kullanıcı | "Sorry, this user has been locked out" mesajı |

## Sonuç
- 3 negatif test yazıldı, 3 passed ✅
- Her test için otomatik screenshot alındı



# Day 04 — Page Object Model

## POM nedir?
Sayfayla ilgili tüm elementleri ve aksiyonları ayrı bir class'ta toplamak.
Testler sadece "ne test ediyorum" sorusuna odaklanır, "nasıl buluyorum" değil.

## Neden kullanıyoruz?
- Kod tekrarını önler
- Element değişince sadece 1 yerde düzeltirsin
- Testler daha okunabilir olur

## Öğrendiklerim
- `class LoginPage` — sayfa class'ı
- `constructor` — elementleri tanımla
- `page.locator()` — element seçici
- `test.beforeEach()` — her testten önce çalışır
- `module.exports` — class'ı dışa aktar
- `require()` — class'ı içe aktar

## Sonuç
- LoginPage.js oluşturuldu ✅
- login.spec.js ve login-negative.spec.js POM'a geçirildi ✅
- 6 test, 6 passed ✅