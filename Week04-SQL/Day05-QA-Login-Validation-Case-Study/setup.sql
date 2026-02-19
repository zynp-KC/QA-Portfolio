-- USERS TABLE
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY,
    email TEXT,
    password TEXT,
    is_active INTEGER,
    created_at TEXT
);
INSERT INTO users (email, password, is_active, created_at)
VALUES (
        'ali@test.com',
        '827ccb0eea8a706c4c34a16891f84e7b',
        1,
        '2025-01-10'
    ),
    ('ayse@test.com', NULL, 1, '2025-01-11'),
    (
        'mehmet@test.com',
        'ab56b4d92b40713acc5af89985d4b786',
        0,
        '2025-01-12'
    );
-- LOGIN ATTEMPS TABLE
CREATE TABLE login_attempts (
    attempt_id INTEGER PRIMARY KEY,
    email TEXT,
    attempt_time TEXT,
    status TEXT
);
INSERT INTO login_attempts (email, attempt_time, status)
VALUES ('ayse@test.com', '2025-02-01 10:00:00', 'FAILED'),
    ('ayse@test.com', '2025-02-01 10:02:00', 'FAILED'),
    ('ayse@test.com', '2025-02-01 10:05:00', 'FAILED'),
    ('ali@test.com', '2025-02-01 11:00:00', 'SUCCESS');