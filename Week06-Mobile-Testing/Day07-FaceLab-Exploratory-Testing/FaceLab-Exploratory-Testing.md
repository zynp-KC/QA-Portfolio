# FaceLab — iOS & Android Karşılaştırma Raporu

## Genel Bilgi

FaceLab, LyreBird Studio tarafından geliştirilen bir mobil fotoğraf düzenleme uygulamasıdır.

50M+ indirme ve 782K+ yorumla global ölçekte kullanılan bir üründür.

iOS ve Android platformlarında manuel keşif (exploratory) testi yapılmıştır.

## Test Detayları

| Alan | Detay |
|------|-------|
| Uygulama | FaceLab (Lyrebird Studio) |
| Test Türü | Manuel / Keşif (Exploratory) |
| iOS Cihaz | iPhone 13 |
| iOS Uygulama Sürümü | FaceLab v4.46.0 |
| Android Cihaz | Samsung Galaxy A21s (2020) |
| Android Uygulama Sürümü | FaceLab v4.5.75 |
| Test Tarihi | Nisan 2026 |
| Tester | Zeynep Kapacak |

---

## Platform Karşılaştırması

| Konu | iOS | Android | Fark |
|------|-----|---------|------|
| Onboarding | 3 adımlı, atlanabiliyor | 3 adımlı, atlanabiliyor | Aynı |
| Ödeme Ekranı | Haftalık & yıllık fiyatlar ilk ekranda görünüyor, açıklayıcı | Sadece "Ücretsiz denemeyi etkinleştir" butonu var, fiyat detayı eksik | Farklı |
| Abonelik fiyatı | Haftalık 82.99 TL | Haftalık 309 TL | Kritik Fark |
| Kamera izni | İzin diyaloğu gösteriyor, red sonrası ayarlara yönlendirme çıkıyor | İzin sormadan direkt kamerayı açıyor | Farklı |
| Galeri paylaş akışı | Çalışmıyor - "Düzenle" butonu tepkisiz | Çalışıyor - uygulamaya geçiyor, düzenleme açılıyor | Farklı |
| Video düzenleme  | Mevcut | Yok | Farklı |
| Yüzsüz fotoğraf uyarısı | Anlamlı uyarı + butonlar | Anlamlı uyarı + butonlar | Aynı |
| Açılış süresi | ~2 sn | ~3-5 sn | Farklı |
| Support e-posta linki (Kullanım Şartları) | Çalışıyor | Bağlantı hatası veriyor | - |
| Donma / çökme | Gözlemlenmedi | Düzenleme kaydı sonrası bir kere dondu | Farklı |
| Metin taşması / layout | Gözlemlenmedi | Gözlemlenmedi | Aynı |
| Buton boyutları | Normal, tutarlı | Normal, tutarlı | Aynı |

---

## Bug Raporu

### Bug-01 — iOS Galeri Paylaş Akışı Çalışmıyor

| Alan | Detay |
|------|-------|
| Bug ID | MATP-2 |
| Platform | iOS |
| Cihaz | iPhone 13 |
| Uygulama Sürümü | FaceLab v4.46.0 |
| Severity | Medium |
| Priority | High |
| Status | Open |

**Summary**
iOS Galeri uygulamasından Paylaş -> FaceLab -> Düzenle akışı hiçbir şey yapmıyor, FaceLab açılmıyor.

**Steps to Reproduce**
1. iPhone Galeri uygulamasını aç
2. Herhangi bir fotoğrafa tıkla
3. Paylaş butonuna bas
4. Listeden FaceLab'ı seç
5. "Düzenle" butonuna bas

**Expected Result**
FaceLab açılmalı ve seçili fotoğrafla düzenleme ekranına yönlendirilmeli.

**Actual Result**
Hiçbir şey olmuyor, galeri ekranında kalınıyor.

**Not**
Sınırlı ve tam albüm erişiminde ikisinde de test edildi, ikisinde de aynı sonuç alındı. Android'de aynı akış sorunsuz çalışıyor - platform tutarsızlığı mevcut.

---

## UX İyileştirme Önerileri

| # | Platform | Öneri | Kategori |
|---|----------|-------|----------|
| 1 | Her ikisi | Undo yalnızca sondan başa çalışıyor; belirli bir adım seçilerek kaldırılamıyor | UX |
| 2 | Android | Ödeme ekranı fiyat detaylarını öne çıkaracak şekilde güncellenmeli | UX |
| 3 | Android | Açılış süresi i0S'a kıyasla uzun, performans testi önerilir | Performans |
| 4 | Android | Video düzenleme özelliği eksik ama kullanıcıya bildirilmiyor | UX |

---

## Pozitif Bulgular
- Yüzsüz fotoğraf yüklenince anlamlı uyarı mesajı çıkıyor
- Onboarding akışı tutarlı ve atlanabiliyor
- Sınırlı albüm erişiminde düzenleme ve kaydetme başarılı
- Yaşlanma videosu arka planda işelniyor, bitince bildirim geliyor
- Android'de galeri paylaş akışı sorunsuz çalışıyor
- Kamera izni red sonrası ayarlara yönlendirme doğru çalışıyor

---

## Kullanılan Araçlar

- iPhone 13 (iOS)
- Samsung Galaxy A21s - Android (2020)
- Jira (bug takibi)