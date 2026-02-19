# QA Database Validation Case Study
## Login Failure Investigation

---

## Senaryo
Kullanıcı kayıt işlemini tamamladığını belirtmesine rağmen sisteme giriş yapamamaktadır.

QA olarak amaç, problemin veritabanı kaynaklı olup olmadığını analiz etmektir.

---

## Analiz Kapsamı

Aşağıdaki kontroller yapılmıştır:

- Kullanıcı kaydı mevcut mu?
- Hesap aktif mi?
- `password` alanı NULL mı?
- Duplicate email var mı?
- 3+ başarısız login mevcut mu?
- Account lock ihtimali var mı?
- Hash yapısı geçerli mi?

---

# Bulgular

Analiz sonucunda:

- Kullanıcı kayıtlı
- Hesap aktif
- Ancak password alanı NULL
- Ayrıca 3 başarısız login attempt mevcut

---

# Olası Root Cause

1. Registration sırasında password validation eksikliği
2. Authentication servisinde hash karşılaştırma hatası
3. 3 başarısız deneme sonrası account lock mekanizması

---

# QA Yetkinlikleri Gösterimi

Bu case study aşağıdaki teknik becerileri göstermektedir:

- Database validation
- JOIN kullanımı
- Aggregation & HAVING
- NULL kontrolü
- Login flow analizi
- Security risk farkındalığı
- Root cause investigation