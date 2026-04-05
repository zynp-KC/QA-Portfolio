# Exploratory Test Charter — 01
## Login & Authentication


**Mission:**
Explore the login functionality to identify security vulnerabilities, edge cases and usability issues.


**Target Area:**
- Login page (web)
- Authentication behavior


**Time Box:** 30 dakika


**Test Ideas:**
- Empty username + valid password
- Valid username + empty password
- Both fields empty
- Invalid username + invalid password
- Valid username + wrong password
- SQL injection attempt in username field: ' OR '1'='1
- Very long username (100+ characters)
- Special characters in username: !@#$%^&*
- Multiple failed login attempts — does account lock?
- Password masking behavior
- Password show/hide button — present or absent?
- Browser back button after login
- Copy-paste into password field
- Login with spaces before/after username


**Risks to Investigate:**
- Brute force protection
- Error message information leakage
    - (Does it say "wrong password" vs "user not found"?
    This reveals valid usernames — security risk)
- Session management after login


**Notes Template:**
| Observation | Expected | Actual | Result |
|---|---|---|---|
| Empty username + valid password | Username required warning | Username required displayed | ✅ Pass |
| Valid username + empty password | Password required warning | Password required displayed | ✅ Pass |
| Both fields empty | Both fields required warning | Both required warnings displayed | ✅ Pass |
| Invalid username + invalid password | Invalid credentials warning | Invalid credentials displayed | ✅ Pass |
| Valid username + wrong password | Invalid credentials warning | Invalid credentials displayed | ✅ Pass |
| SQL injection in username field | Invalid credentials warning | Invalid credentials displayed | ✅ Pass |
| Very long username (100+ chars) on login | No restriction | Invalid credentials displayed | ✅ Pass |
| Very long username (100+ chars) on register | Error message | Should not exceed 40 characters | ✅ Pass |
| Special characters in username | Should login if registered | Login successful | ✅ Pass |
| Multiple failed login attempts | Account should lock | Login still accessible | 🐛 Bug – see BUG-05 |
| Password masking behavior | Password masked | Password masked | ✅ Pass |
| Password show/hide button | Show/hide button present | No show/hide button | ⚠️ Improvement |
| Browser back button after login | Credentials cleared | Inconsistent — attempt 1: username visible, attempts 2-3: cleared | ❓ Investigate |
| Copy-paste into password field | Should work | Works successfully | ✅ Pass |
| Login with spaces before/after username | Invalid credentials | Invalid credentials displayed | ✅ Pass |
| Forgot password | Reset email sent | 504 Gateway Time-out | 🐛 Bug |


**Bugs Found:**
| ID | Summary | Severity | Priority |
|---|---|---|---|
| BUG-02 | 504 Gateway Time-out error on forgot password flow | High | P2 |
| BUG-05 | Multiple failed login attempts do not lock the account — brute force vulnerability | High | P1 |


**Improvements:**
| ID | Summary |
|---|---|
| IMP-02 | Password show/hide button absent — UX improvement needed |