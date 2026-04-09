## BUG-07

- **ID:** BUG-07
- **Title:** Tapping Deny on access permission screen causes authentication failure
- **Module:** Mobile / Android / Authentication
- **Severity:** Medium
- **Priority:** P2
- **Status:** Open
- **Environment:**
  - App: OrangeHRM Mobile
  - Device: Samsung Galaxy A21s
  - OS: Android
- **Preconditions:**
  - App is installed on the device
- **Steps to Reproduce:**
  1. Open the OrangeHRM mobile app on Android
  2. Enter the URL: [OrangeHRM demo](https://opensource-demo.orangehrmlive.com/)
  3. Log in with valid admin credentials
  4. When the access permission screen appears, tap **Deny**
- **Expected Result:** The user should either be able to continue using the app without granting additional access permissions, or a clear explanation should be shown.
- **Actual Result:** Tapping **Deny** causes an **Authentication Failed** error, and the user cannot continue without granting access.
- **Note:** The app forces the user to grant access permissions and does not provide an alternative flow.
- **Attachment:** Not available