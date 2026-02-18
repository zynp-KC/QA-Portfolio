-- 1) Customer ve Payment join
SELECT c.customer_id,
    c.first_name,
    c.last_name,
    p.amount
FROM customer c
    INNER JOIN payment p ON c.customer_id = p.customer_id;
-- 2) Belirli müşteri ödemeleri
SELECT c.customer_id,
    c.first_name,
    p.amount
FROM customer c
    INNER JOIN payment p ON c.customer_id = p.customer_id
WHERE c.customer_id = 10;
-- 3) Hiç ödeme yapmamış aktif müşteriler
SELECT c.customer_id,
    c.first_name,
    c.last_name
FROM customer c
    LEFT JOIN payment p ON c.customer_id = p.customer_id
WHERE p.payment_id IS NULL
    AND c.active = 1;