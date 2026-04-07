## BUG-05
- **Title:** Brute force — no account lockout
- **Module:** Login
- **Severity:** High
- **Priority:** P1
- **Status:** Open
- **Environment:** 
    - Web: https://opensource-demo.orangehrmlive.com
    - Browser: Chrome
    - OS: Windows 11
- **Steps to Reproduce:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username: Admin
    3. Enter invalid password: invalidpass123
    4. Click login button
    5. Repeat steps 2-4 five times consecutively
- **Expected Result:** Account should be locked after multiple failed login attempts. Warning message displayed.
- **Actual Result:** Account remains accessible after multiple failed attempts. No lockout mechanism triggered.
- **Screenshot:** Not available — observed during exploratory session