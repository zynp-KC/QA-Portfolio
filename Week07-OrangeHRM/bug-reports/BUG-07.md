## BUG-07
- **Title:** "Deny" access -> Authentication Failed
- **Module:** Mobile/Android
- **Severity:** Medium
- **Priority:** P2
- **Status:** Open
- **Environment:**
    - App: OrangeHRM Mobile
    - Device: Samsung Galaxy A21s
    - OS: Android
- **Steps to Reproduce:**
    1. Open OrangeHRM app on Android
    2. Enter URL: https://opensource-demo.orangehrmlive.com
    3. Log in with Admin / admin123
    4. Click "Deny"
- **Expected Result:** User should be able to use the app without granting additional access permissions, or a clear explanation should be provided
- **Actual Result:** Clicking "Deny" on the access permission screen results in "Authentication Failed" error. User cannot proceed without granting access.
- **Screenshot:** Not available
- **Note:** User is forced to grant access permissions to use the app — no alternative flow provided