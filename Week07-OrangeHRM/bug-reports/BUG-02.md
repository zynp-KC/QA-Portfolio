## BUG-02

- **ID:** BUG-02
- **Title:** Forgot Password returns 504 Gateway Timeout error
- **Module:** Login / Forgot Password
- **Severity:** High
- **Priority:** P2
- **Status:** Open
- **Environment:**
  - Web: [OrangeHRM demo](https://opensource-demo.orangehrmlive.com/)
  - Browser: Chrome
  - OS: Windows 11
- **Preconditions:**
  - User is on the login page
- **Steps to Reproduce:**
  1. Open the OrangeHRM demo site
  2. Click the **Forgot your password?** link
  3. Enter `Admin` in the username field
  4. Click the **Reset Password** button
- **Expected Result:** The system should process the request successfully and display a password reset confirmation message.
- **Actual Result:** A **504 Gateway Timeout** error is displayed instead of the expected confirmation.
- **Attachment:** ![BUG-02 Forgot Password](screenshots/bug-02-504-forgot-password.PNG)