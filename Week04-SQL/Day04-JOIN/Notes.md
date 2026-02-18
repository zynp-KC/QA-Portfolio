# JOIN Operatörü & Çoklu Tablo Analizi

## JOIN Nedir?
JOIN, iki veya daha fazla tabloyu aralarındaki ilişkiye göre birleştirir.

En yaygın kullanılan JOIN türü: `INNER JOIN`

### Temel Syntax
```sql
SELECT columns
FROM table1
INNER JOIN table2
ON table1.column = table2.column;
```
### dvdrental Örneği
`customer` ve `payment` tabloları `customer_id` üzerinden ilişkilidir.

# QA Senaryoları

## Hangi müşteri hangi ödemeyi yaptı?

```sql
SELECT c.customer_id, c.first_name, c.last_name, p.amount
FROM customer c
INNER JOIN payment p
ON c.customer_id = p.customer_id;
```

**Amaç:**
- Ödemenin doğru kullanıcıya bağlı olduğunu doğrulamak

## Ödeme Yapmamış Aktif Kullanıcı Var mı?

```sql
SELECT c.customer_id, c.first_name
FROM customer c
LEFT JOIN payment p
ON c.customer_id = p.customer_id
WHERE p.payment_id IS NULL
AND c.active = 1;
```
Bu şunu kontrol eder:
- Aktif kullanıcı var
- Ama ödeme kaydı yok

Bu tip durumlar bug olabilir.

## En çok ödeme yapan müşteriler kim?

```sql
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    SUM(p.amount) AS total_spent
FROM customer c
INNER JOIN payment p
ON c.customer_id = p.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY total_spent DESC;
```

**Amaç:**
- Toplam ödeme tutarını hesaplamak
- En yüksek harcama yapan kullanıcıları görmek
