# FaceLab — Keşif Turu Notları

## Genel Bilgi

FaceLab, LyreBird Studio tarafından geliştirilen bir mobil fotoğraf düzenleme uygulamasıdır.

50M+ indirme ve 782K+ yorumla global ölçekte kullanılan bir üründür.

iOS ve Android platformlarında manuel keşif (exploratory) testi yapılmıştır.

## Test Kapsamı

| Alan | Detay |
|------|-------|
| Uygulama | FaceLab (LyreBird Studio) |
| Test Türü | Manuel / Keşif (Exploratory) |
| Platformlar | iOS & Android |
| iOS Cihaz | iPhone 13 |
| iOS Uygulama Sürümü | FaceLab v4.46.0 |
| Android Cihaz | Samsung Galaxy A21s (2020) |
| Android Uygulama Sürümü | FaceLab v4.5.75 |
| Test Tarihi | Nisan 2026 |
| Tester | Zeynep Kapacak |

## Test Edilen Alanlar

- Onboarding akışı
- İzin yönetimi (kamera, galeri)
- Fotoğraf düzenleme akışı
- Galeri paylaşım akışı
- Abonelik ve ödeme ekranı
- Yüzsüz fotoğraf hata yönetimi
- İnternet kullanım
- Yaşlanma videosu arka plan işlemi
- Ayarlar ve support linki
- iOS & Android platform karşılaştırması

## Özet Bulgular

### Bug'lar
| Bug ID | Platform | Özet | Severity | Priority |
|--------|----------|------|----------|----------|
| MATP-2 | iOS | Galeri paylaş akışı çalışmıyor | Medium | High |

### UX İyileştirme Önerileri
| # | Platform | Öneri |
|---|----------|-------|
| 1 | Her ikisi | Undo yalnızca sondan başa çalışıyor, belirli adım seçilerek kaldırılamıyor |
| 2 | Android | Ödeme ekranı fiyat detaylarını öne çıkaracak şekilde güncellenmeli |
| 3 | Android | Açılış süresi iOS'a kıyasla uzun (~3-5 sn vs ~2 sn) |
| 4 | Android | Video düzenleme eksik ama kullanıcıya bildirilmiyor |

### Pozitif Bulgular
- Yüzsüz fotoğraf anlamlı uyarı mesajı çıkıyor
- İnternetsiz kullanımda açıklayıcı hata mesajı gösteriliyor
- Onboarding akışı her iki platformda tutarlı, atlanabiliyor
- Sınırlı albüm erişiminde düzenleme ve kaydetme başarılı
- Yaşlanma videosu arka planda işleniyor, bitince bildirim geliyor
- Android'de galeri paylaş akışı sorunsuz çalışıyor
- Kamera izni red sonrası ayarlara yönlendirme doğru çalışıyor

## En Kritik Bulgu

iOS ve Android arasında haftalık abonelik fiyatı büyük farklılık gösteriyor (82.99 TL vs 309 TL). Bu farkın kısıtlı olup olmadığı doğrulanmalı; kullanıcı memnuniyeti ve gelir açısından risk taşıyor.

## Kullanılan Araçlar

- iPhone 13 (iOS)
- Samsung Galaxy A21s - Android (2020)
- Jira (bug takibi)