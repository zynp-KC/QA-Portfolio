# WHERE Komutu & Veri Filtreleme

## Genel Bakış
Bu bölüm, SQL'de veri filtreleme amacıyla kullanılan `WHERE` komutu odaklanmaktadır.

`WHERE`,veritabanındaki kayıtları belirli koşullara göre süzmek için kullanılır ve özellikle QA süreçlerinde backend doğrulaması için kritik öneme sahiptir.


## WHERE Komutu Nedir?
`WHERE` ifadesi, `SELECT` sorgusuna koşul ekleyerek yalnızca belirlenen kriterleri karşılayan kayıtların getirilmesini sağlar.

- `WHERE` kullanılmadığında sorgu, ilgili tablodaki **tüm kayıtları** döndürür.
- `WHERE` kullanıldığında ise yalnızca koşulu sağlayan kayıtlar listelenir.


## Temel Kullanım

```sql
SELECT column_name
FROM table_name
WHERE condition;
```


## Karşılaştırma ve Mantıksal Operatörler

| Operatör | Açıklama |
|----------|----------|
| =        | Eşittir  |
| >        | Büyüktür |
| <        | Küçüktür |
| >=       | Büyük eşittir |
| <=       | Küçük eşittir |
| <>       | Eşit değildir |
| AND      | Tüm koşullar doğru olmalı |
| OR       | Koşullardan en az biri doğru olmalı |
| IS NULL  | NULL (boş) değer kontrolü |


## QA Perspektifinde Kullanımı
QA süreçlerinde `WHERE` komutu, uygulama üzerinden yapılan işlemlerin veritabanına doğru şekilde yansıyıp yansımadığını doğrulamak için kullanılır.

### Başlıca Kullanım Senaryoları:
- Belirli bir kullanıcı kaydının sistemde mevcut olup olmadığını kontrol etme
- Bir ödemenin doğru tutarla kaydedilip kaydedilmediğini doğrulama
- Kullanıcının aktif/pasif durumunu kontrol etme
- NULL veya eksik veri tespiti
- UI üzerinden yapılan güncellemenin veritabanına yansıyıp yansımadığını inceleme