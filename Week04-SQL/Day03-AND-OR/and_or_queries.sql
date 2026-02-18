-- 1) Belirli müşterinin 5$ üzeri ödemeleri
SELECT *
FROM payment
WHERE customer_id = 10
    AND amount > 5;
-- 2) İki farklı müşteri
SELECT *
FROM customer
WHERE customer_id = 5
    OR customer_id = 8;
-- 3) Belirli tarihten sonraki yüksek ödemeler
SELECT *
FROM payment
WHERE amount > 8
    AND payment_date > '2005-04-29';
-- 4) Aktif olmayan veya email NULL olan müşteriler
SELECT *
FROM customer
WHERE active = 0
    OR email IS NULL;
-- 5) Kullanıcı aktif ama ödeme görünmüyor
SELECT *
FROM payment
WHERE customer_id = 15
    AND amount > 0
    AND payment_date > '2007-02-01';