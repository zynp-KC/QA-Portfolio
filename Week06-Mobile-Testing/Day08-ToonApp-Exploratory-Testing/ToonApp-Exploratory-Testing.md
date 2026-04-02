# ToonApp — Keşif Turu Raporu

## Genel Bilgi

ToonApp, Lyrebird Studio tarafından geliştirilen bir mobil fotoğraf ve video düzenleme uygulamasıdır.
110M+ indirme ve 2.4M+ değerlendirme ile 4.56 puanla global ölçekte kullanılan bir üründür.
iOS ve Android platformlarında manuel keşif (exploratory) testi yapılmıştır.

## Test Detayları

| Alan | Detay |
|---|---|
| Uygulama | ToonApp (Lyrebird Studio) |
| Test Türü | Manuel / Keşif (Exploratory) |
| iOS Cihaz | iPhone 13 |
| iOS Uygulama Sürümü | ToonApp v3.7.0 |
| Android Cihaz | Samsung Galaxy A21s (2020) |
| Android Uygulama Sürümü | ToonApp v3.1.58 |
| Test Tarihi | Nisan 2026 |
| Tester | Zeynep Kapacak |

> **Not:** iOS (v3.7.0) ve Android (v3.1.58) farklı sürümler olduğundan kredi sistemi ve video modları gibi bazı özellikler yalnızca iOS'ta mevcuttur.

---

## Platform Karşılaştırması

| Konu | iOS | Android | Fark |
|---|---|---|---|
| Onboarding | 3 adımlı, atlanabiliyor | 3 adımlı, atlanabiliyor | Aynı |
| Ödeme ekranı | Fiyatlar ve kredi detayları ilk ekranda açıkça görünüyor | Sadece "3 günlük ücretsiz deneme başlat" butonu var, fiyat detayı eksik | Farklı |
| Abonelik fiyatı | 3 gün ücretsiz sonra haftalık 399.99 TL | 3 gün ücretsiz Haftalık 309 TL | Farklı |
| Kredi sistemi | Mevcut — 1000 başlangıç kredisi | Yok (eski sürüm) | Farklı |
| Video modları | Mevcut — dans modu, mimik modu vb. | Yok (eski sürüm) | Farklı |
| Galeri izni | Fotoğraf seçiminde özel erişim bildirimi çıkıyor, kapatılabiliyor | Tüm galeri için izin isteniyor | Farklı |
| İzin reddedilince | Ayarlara yönlendiren bilgilendirme butonu çıkıyor | Ayarlara yönlendiren bilgilendirme butonu çıkıyor | Aynı |
| Galeri paylaş akışı | Çalışmıyor — uygulama açılmıyor | Çalışmıyor — uygulama açılıyor ama fotoğraf kayboluyor | Farklı |
| Karikatür / anime oluşturma | Başarılı | Başarılı | Aynı |
| Yüzsüz fotoğraf uyarısı | Test edilmedi | Anlamlı uyarı çıkıyor | — |
| Yüz çok uzaksa uyarı | Test edilmedi | Anlamlı uyarı çıkıyor | — |
| Arka planda işlem | Görsel/video oluşturulurken gezinmeye devam edilebiliyor | Anime oluşturulurken gezinmeye devam edilebiliyor | Aynı |
| İnternetsiz — giriş | Direkt uyarı veriyor |  Efekte tıklayıp fotoğraf seçtikten sonra uyarı çıkıyor, geç kalıyor | Farklı |
| Destek butonu | Mail uygulamasına yönlendiriyor, çalışıyor | Mail uygulamasına yönlendiriyor, çalışıyor | Aynı |
| Bizi değerlendirin | App Store'a yönlendiriyor, çalışıyor | Play Store'a yönlendiriyor, çalışıyor | Aynı |
| Bulut depolama bildirimi | Bazı modlarda içerik bulutta saklanacağı bildirimi çıkıyor | Test edilmedi | — |
| Açılış süresi | ~2.5 saniye | ~10-11 saniye | Kritik fark |
| Metin taşması / layout | Gözlemlenmedi | Gözlemlenmedi | Aynı |

---

## Bug Raporları

### Bug-01 — Galeri Paylaş Akışı Çalışmıyor (iOS)

| Alan | Detay |
|---|---|
| Bug ID | TOONAPP-01 |
| Platform | iOS |
| Cihaz | iPhone 13 |
| Uygulama Sürümü | ToonApp v3.7.0 |
| Severity | Medium |
| Priority | High |
| Status | Open |

**Summary**
iOS Galeri uygulamasından Paylaş → ToonApp akışı çalışmıyor, uygulama açılmıyor.

**Steps to Reproduce**
1. iPhone Galeri uygulamasını aç
2. Herhangi bir fotoğrafa tıkla
3. Paylaş butonuna bas
4. Listeden ToonApp'i seç

**Expected Result**
ToonApp açılmalı ve seçili fotoğrafla düzenleme ekranına yönlendirmeli.

**Actual Result**
Uygulama açılmıyor. Fotoğrafın üzerinde ok işareti çıkıyor, tıklanınca fotoğraf galeride normal şekilde duruyor.

**Not**
Android'de aynı akışta uygulama açılıyor ancak fotoğraf kayboluyor — her iki platformda farklı şekillerde çalışmıyor.

---

### Bug-02 — Galeri Paylaş Akışında Fotoğraf Kayboluyor (Android)

| Alan | Detay |
|---|---|
| Bug ID | TOONAPP-02 |
| Platform | Android |
| Cihaz | Samsung Galaxy A21s (2020) |
| Uygulama Sürümü | ToonApp v3.1.58 |
| Severity | Medium |
| Priority | High |
| Status | Open |

**Summary**
Android Galeri uygulamasından Paylaş -> ToonApp akışında uygulama açılıyor ancak seçilen fotoğraf kayboluyor.

**Steps to Reproduce**
1. Android Galeri uygulamasını aç
2. Herhangi bir fotoğrafa tıkla
3. Paylaş butonuna bas
4. Listeden ToonApp'i seç

**Expected Result**
ToonApp açılmalı ve seçili fotoğrafla düzenleme ekranına yönlendirmeli.

**Actual Result**
ToonApp açılıyor ancak seçilen fotoğraf gelmiyor, ekran boş geliyor.

**Not**
iOS'ta aynı akışta uygulama hiç açılmıyor — her iki platformda farklı şekillerde çalışmıyor.

---

## UX İyileştirme Önerileri

| # | Platform | Öneri | Kategori |
|---|----------|-------|----------|
| 1 | Android | Ödeme ekranı fiyat ve kredi detaylarını öne çıkaracak şekilde güncellenmeli | UX |
| 2 | Android | İnternetsiz kullanımda uyarı efekt seçiminden önce gösterilmeli | UX |
| 3 | Android | Açılış süresi performans testi yapılmalı (~10-11 sn vs iOS ~2.5 sn) | Performans |

---

## Pozitif Bulgular

- Karikatür / anime oluşturma her iki platformda başarılı
- Görsel / video oluşturulurken arka planda gezinmeye devam edilebiliyor
- Destek butonu her iki platformda mail uygulamasına yönlendiriyor, çalışıyor
- İzin reddedilince ayarlara yönlendirme her iki platformda çalışıyor
- Android'de yüzsüz veya yüzü çok uzak fotoğraflarda anlamlı uyarı mesajları çıkıyor
- iOS'ta internetsiz girişte direkt uyarı veriliyor
- Bulut depolama kullanılmadan önce kullanıcıya bildirim yapılıyor

---

## Kullanılan Araçlar

- iPhone 13 (iOS)
- Samsung Galaxy A21s — Android (2020)