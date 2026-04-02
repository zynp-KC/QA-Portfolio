# FaceLab — Bug Raporları

## Test Detayları

| Alan | Detay |
|------|-------|
| Uygulama | FaceLab (Lyrebird Studio) |
| Test Türü | Manuel / Keşif (Exploratory)|
| iOS Cihaz | iPhone 13 |
| iOS Uygulama Sürümü | FaceLab v4.46.0 |
| Test Tarihi | Nisan 2026 |
| Tester | Zeynep Kapacak |

---

## Bug-01 — iOS Galeri Paylaş Akışı Çalışmıyor

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