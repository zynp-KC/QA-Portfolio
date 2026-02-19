# Week 04 - SQL
Bu bölüm, SQL kullanarak veritabanı sorgulama, ilişkisel veri analizi ve QA odaklı doğrulama çalışmalarını kapsamaktadır.

---

## Scope
Bu hafta kapsamında aşağıdaki konuları çalışılmıştır:

- Temel `SELECT` sorguları
- `WHERE` ile koşullu filtreleme
- `AND` / `OR` mantıksal operatörleri
- `INNER JOIN` ve `LEFT JOIN`
- `NULL` kontrolü
- `GROUP BY` ve `HAVING`
- Aggregation fonksiyonları (`COUNT`, `SUM`)
- Veri tutarlılığı ve iş kuralı doğrulama

---

## Case Study
Hafta, gerçekçi bir **Login Validation** senaryosu ile tamamlanmıştır.

Senaryo kapsamında:

- Kullanıcı kaydı doğrulama
- Hesap aktiflik kontrolü
- `NULL` password analizi
- Duplicate email tespiti
- Başarısız login denemelerinin incelenmesi
- Database seviyesinde root-cause analizi

---

## Objective
Bu çalışma ile SQL'in QA mühendisliği bağlamında aşağıdaki amaçlarla uygulanması hedeflenmiştir:

- Veri doğrulama
- İş kuralı kontrolü
- Hata analizi
- Sistemsel tutarsızlık tespiti

---

## Outcome
Bu haftanın sonunda:

- Backend doğrulama mantığı geliştirilmiştir
- Karmaşık filtreleme ve veri analizi yapılabilmektedir.
- Gerçekçi bug investigation senaryoları uygulanmıştır
- SQL'in yalnızca veri çekmek değil, sistem analizi yapmak için kullanımı kavranmıştır.