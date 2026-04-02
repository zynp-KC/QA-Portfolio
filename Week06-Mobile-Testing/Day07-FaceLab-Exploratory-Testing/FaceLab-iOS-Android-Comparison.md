# FaceLab — iOS & Android Karşılaştırma Raporu

## Test Detayları

| Alan | Detay |
|------|-------|
| Uygulama | FaceLab (Lyrebird Studio) |
| Test Türü | Manuel / Keşif (Exploratory) |
| iOS Cihaz | iPhone |
| Android Cihaz | Samsung Galaxy A21s |
| Test Tarihi | Nisan 2026 |
| Tester | Zeynep Kapacak |

---

## Platform Karşılaştırması

| Konu | iOS | Android | Fark |
|------|-----|---------|------|
| Onboarding | 3 adımlı, atlanabiliyor | 3 adımlı, atlanabiliyor | Aynı |
| Ödeme Ekranı | Haftalık & yıllık fiyatlar ilk ekranda görünüyor, açıklayıcı | Sadece "Ücretsiz denemeyi etkinleştir" butonu var, fiyat detayı eksik | Farklı |
| Abonelik fiyatı | Haftalık 82.99 TL | Haftalık 309 TL | Kritik Fark |
| Kamera izni | İzin diyaloğu gösteriyor, red sonrası ayarlara yinlendirme çıkıyor | İzin sormadan direkt kamerayı açıyor | Farklı |
| Galeri paylaş akışı | Çalışmıyor - "Düzenle" butonu tepkisiz kalıyor | Çalışıyor - uygulamaya geçiyor, düzenleme açılıyor | Farklı |
| Video düzenleme  | Mevcut | Yok | Farklı |
| Yüzsüz fotoğraf uyarısı | Anlamlı uyarı + butonlar | Anlamlı uyarı + butonlar | Aynı |
| Açılış süresi | ~2 sn | ~3-5 sn | Farklı |
| Support e-posta linki | Çalışıyor | Bağlantı hatası veriyor | Bug |
| Donma / çökme | Gözlemlenmedi | Düzenleme kaydı sonrası bir kere dondu | Farklı |
| Metin taşması / layout | Gözlemlenmedi | Gözlemlenmedi | Aynı |
| Buton boyutları | Normal, tutarlı | Normal, tutarlı | Aynı |

---

## Öne Çıkan Bulgular

### En Kritik
iOS ve Android arasındaki haftalık abonelik fiyatları büyük farklılık gösteriyor (82.99 TL vs 309 TL). Bu farkın kasıtlı olup olmadığı doğrulanmalı; kullanıcı memnuniyeti ve gelir açısından risk taşıyor.

## iOS'a Özgü Bug
Galeri -> Paylaş -> Facelab -> Düzenle akışı iOS'ta çalışmıyor. Aynı akışı Android'de sorunsuz çalışıyor - platform tutarsızlığı net şekilde ortaya çıkıyor.

## Her İki Platformda Ortak Pozitif Bulgu
- Yüzsüz fotoğraf yüklenince anlamlı uyarı mesajı çıkıyor
- Onboarding akışı tutarlı ve atlanabiliyor
- Metin taşması / layout bozukluğu gözlemlenmedi

---

# UX İyileştirme Önerileri

| Öneri | Platform | Kategori |
|-------|----------|----------|
| Undo yalnızca sondan başa çalışıyor; belirli bir adım seçilerek kaldırılamıyor | Her ikisi | UX |
| Android ödeme ekranı fiyatları öne çıkaracak şekilde güncellenmeeli | Android | UX |
| Android açılış süresi uzun, performans testi önerilir | Android | Performans |
| Android'de video düzenleme özelliği eksik ama kullanıcıya bildirilmiyor | Android | UX | 