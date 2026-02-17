# SQL Temel Kavramlar

## SQL Nedir? 
SQL (Structured Query Language), veritabanındaki verileri sorgulamak ve yönetmek için kullanılan bir sorgu dilidir.

QA süreçlerinde genellikle veriyi okumak ve doğrulamak amacıyla kullanılır.


## Database Nedir?
Database, verilerin düzenli ve organize bir şekilde saklandığı dijital bir depolama alanıdır.

Bir uygulamadaki:
- Kullanıcı bilgileri
- Siparişler
- Ürünler

gibi tüm veriler veritabanında tutulur.


## Table Nedir?
Table, verilerin satır (**row**) ve sütunlar (**column**) halinde saklandığı yapıdır.
- Her satır bir kaydı temsil eder (örneğin bir kullanıcı).
- Her sütun bir bilgi türünü temsil eder (örneğin isim, email, yaş).

### Örnek tablo yapısı;
| id | name | email | age |
|----|------|-------|-----|



## SELECT Nedir?
`SELECT`, veritabanından veri çekmek (okumak) için kullanılan SQL komutudur.

### QA Açısından Önemi 
- UI'da yapılan işlemin gerçekten veritabanına kaydedilip kaydedilmediğini kontrol etmek için kullanılır.
- Test edilen verilerin doğruluğunu kontrol etmeyi sağlar.


# Örnek SQL Sorguları

## Tüm tabloyu getirme

```sql
SELECT * FROM users;
```

`users` tablosundaki tüm sütunları ve tüm kayıtları getirir.


## Belirli sütunları getirme

```sql
SELECT name, email FROM users;
```
`users` tablosundan sadece `name` ve `email` sütunlarını getirir.