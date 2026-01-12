### Smoke Testing
- Smoke test, uygulamanın temel ve kritik fonksiyonlarının çalışıp çaalışmadığını hızlıca kontrol etmek için yapılır.
- Amaç detaylı hata bulmak değil, build'in test edilebilir olup olmadığını anlamaktır.
- Başarısız olursa detaylı testlere geçilmez.



### Regression Testing
- Regression test, yapılan değişikliklerin mevcut fonksiyonları bozup bozmadığını kontrol eder.
- Amaç yeni hataları yakalamaktır.
- Regression test genellikle önceden hazırlanmış test case veya checklist üzerinden yapılır.



| Özellik | Smoke Test | Regression Test |
|---------|------------|-----------------|
| Amaç | Build ayakta mı | Eski fonksiyonlar bozuldu mu |
| Kapsam | Çok dar | Geniş |
| Zaman | Build sonrası | Fix / release öncesi |
| Süre | Kısa | Uzun |