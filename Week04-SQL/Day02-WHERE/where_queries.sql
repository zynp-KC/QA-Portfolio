-- 1) Belirli bir müşteriyi getirme
SELECT *
FROM customer
WHERE customer_id = 5;
-- 2) Aktif müşterileri listeleme
SELECT first_name,
    last_name,
    active
FROM customer
WHERE active = 1;
-- 3) 5$'dan büyük ödemeleri listeleme
SELECT customer_id,
    amount
FROM payment
WHERE amount > 5;
-- 4) Belirli şehirdeki adresleri getirme
SELECT *
FROM address
WHERE district = 'Texas';
-- 5) Email alanı boş olan müşterileri kontrol etme
SELECT *
FROM customer
WHERE email IS NULL;
-- 6) Belirli tarihten sonraki kiralamalar
SELECT *
FROM rental
WHERE rental_date > '2005-07-06';