## BUG-06

- **ID:** BUG-06
- **Title:** Logout does not end user session on Android
- **Module:** Mobile / Android / Authentication
- **Severity:** Medium
- **Priority:** P2
- **Status:** Open
- **Environment:**
  - App: OrangeHRM Mobile
  - Device: Samsung Galaxy A21s
  - OS: Android
- **Preconditions:**
  - Valid admin credentials are available
- **Steps to Reproduce:**
  1. Open the OrangeHRM mobile app on Android
  2. Enter the URL: [OrangeHRM demo](https://opensource-demo.orangehrmlive.com/)
  3. Log in with valid admin credentials
  4. Navigate to any page in the app
  5. Tap the profile icon
  6. Tap **Logout**
- **Expected Result:** The user should be logged out successfully and redirected to the login screen.
- **Actual Result:** Logout does not work. The user remains on the home page and the session is not terminated.
- **Attachment:** Not available