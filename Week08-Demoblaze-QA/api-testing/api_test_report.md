# API Test Report — Demoblaze E-Commerce

- **Date:** 2026-04-24
- **Tester:** Zeynep KC
- **Base URL:** https://api.demoblaze.com
- **Tool:** Postman

---

## Test Results

| Endpoint | Method | Expected Status | Actual Status | Result |
|---|---|---|---|---|
| /signup | POST | 200 OK | 200 OK | ✅ Pass |
| /signup (duplicate) | POST | 409 Conflict | 200 OK | ⚠️ Bug |
| /login | POST | 200 OK | 200 OK | ✅ Pass |
| /login (invalid) | POST | 401 Unauthorized | 200 OK | ⚠️ Bug |
| /entries | GET | 200 OK | 200 OK | ✅ Pass |
| /bycat | POST | 200 OK | 200 OK | ✅ Pass |
| /view | POST | 200 OK | 200 OK | ✅ Pass |
| /addtocart | POST | 200 OK | 200 OK | ✅ Pass |
| /viewcart | POST | 200 OK | 200 OK | ✅ Pass |
| /deleteitem | POST | 200 OK | 200 OK | ✅ Pass |
| /deletecart | POST | 200 OK | 200 OK | ✅ Pass |
| /viewcart (invalid token) | POST | 401 Unauthorized | 200 OK | ⚠️ Bug |

---

## API Bugs Found

| # | Endpoint | Issue | Expected | Actual |
|---|---|---|---|---|
| 1 | /signup | Duplicated user returns wrong status code | 409 Conflict | 200 OK |
| 2 | /login | Invalid credentials returns wrong status code | 401 Unauthorized | 200 OK |
| 3 | /viewcart | Invalid token returns wrong status code | 401 Unauthorized | 200 OK |
| 4 | /deleteitem | Delete operation uses POST instead of DELETE | DELETE method | POST method |

---

## Notes

- Demoblaze API does not follow REST standards for error responses
- All endpoints use POST method including delete operations
- No proper HTTP status codes for authentication failure