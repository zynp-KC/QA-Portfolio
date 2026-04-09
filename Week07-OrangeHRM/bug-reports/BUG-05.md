## BUG-05

- **ID:** BUG-05
- **Title:** No account lockout after multiple failed login attempts
- **Module:** Login / Security
- **Severity:** High
- **Priority:** P1
- **Status:** Open
- **Environment:**
  - Web: [OrangeHRM demo](https://opensource-demo.orangehrmlive.com/)
  - Browser: Chrome
  - OS: Windows 11
- **Preconditions:**
  - Valid username is available
  - User is on the login page
- **Steps to Reproduce:**
  1. Open the OrangeHRM demo site
  2. Enter `Admin` in the username field
  3. Enter an invalid password
  4. Click the **Login** button
  5. Repeat steps 2–4 five times consecutively
- **Expected Result:** The account should be temporarily locked after multiple failed login attempts, and a warning message should be displayed.
- **Actual Result:** The account remains accessible after repeated failed login attempts, and no lockout mechanism is triggered.
- **Attachment:** Not available — observed during exploratory session