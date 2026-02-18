# AND/OR Operatörleri & Koşullu Veri Analizi

## AND ve OR Nedir?
### AND

Tüm koşulların doğru olması gerekir.
```sql
SELECT * 
FROM table_name
WHERE condition1 AND condition2;
```

### OR

Koşullardan en az birinin doğru olması yeterlidir.
```sql
SELECT *
FROM table_name
WHERE condition1 OR condition2;
```

 - SQL'de `AND`, `OR`'dan önce çalışır.

# QA Perspektifi: Gerçek Senaryolar

## Aktif VE belirli şehirde olan müşteriler

```sql
SELECT *
FROM customer
WHERE active = 1
AND store_id = 1;
```

**Amaç:**
UI'da filtrelenen kullanıcı listesinin backend'de doğru yansıyıp yansımadığını kontrol etmek.

## Sistem negatif ödeme kaydetmiş olabilir mi?

Bu bir edge-case kontrolüdür.

Normal şartlarda ödeme tutarı negatif olmamalıdır.

```sql
SELECT *
FROM payment
WHERE amount < 0
OR amount IS NULL;
```
**Amaç:**
- Veri bütünlüğü ihlali var mı?
- Backend validation eksik mi?

Bu tarz sorgular production ortamda kritik hataları yakalamak için kullanılır.

## Aktif olmayan kullanıcı ödeme yapmış mı?

Business logic'e göre pasif kullanıcı ödeme yapmamalıdır.

```sql
SELECT *
FROM payment
WHERE customer_id IN (
    SELECT customer_id
    FROM customer
    WHERE active = 0
)
AND amount > 0;
```
Eğer sonuç gelirse:

Sistem iş kuralını ihlal ediyor olabilir.

Bu artık sadece filtre değil, iş kuralı doğrulamasıdır.


# QA Açısından Önemi

- Karmaşık filtreleme yapılabilir.
- Hedefli bug doğrulaması sağlanır.
- Veri tutarlılığı analiz edilir.
- Edge-case senaryoları test edilebilir.
- Backend doğrulama daha kontrollü yapılır.