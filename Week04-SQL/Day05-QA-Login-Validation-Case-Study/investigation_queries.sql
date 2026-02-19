-- 1) Kullanıcı var mı?
SELECT *
FROM users
WHERE email = 'ayse@test.com';
-- 2) Aktif mi?
SELECT *
FROM users
WHERE email = 'ayse@test.com'
    AND is_active = 1;
-- 3) Password NULL mı?
SELECT *
FROM users
WHERE email = 'ayse@test.com'
    AND password IS NULL;
-- 4) Duplicate email kontrolü
SELECT email,
    COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
-- 5) 3 ve üzeri başarısız giriş var mı?
SELECT email,
    COUNT(*) AS failed_attempts
FROM login_attempts
WHERE status = 'FAILED'
GROUP BY email
HAVING COUNT(*) >= 3;
-- 6) Aktif ama başarısız login yapan kullanıcı
SELECT u.email,
    u.is_active,
    COUNT(l.attempts_id) AS failed_attempts
FROM users u
    INNER JOIN login_attempts l ON u.email = l.email
WHERE l.status = 'FAILED'
    AND u.is_active = 1
GROUP BY u.email,
    u.is_active;
-- 7) Password uzunluk kontrolü (hash validation)
SELECT email,
    LENGTH(password) AS password_length
FROM users;