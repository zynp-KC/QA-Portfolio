## BUG-08
- **Title:** Inconsistent authentication flow
- **Module:** Mobile/iOS
- **Severity:** High
- **Priority:** P2
- **Status:** Open
- **Environment:**
    - App: OrangeHRM Mobile
    - Device: iPhone 13
    - OS: iOS
- **Steps to Reproduce:**
    1. Open OrangeHRM app on iOS
    2. Enter URL: https://opensource-demo.orangehrmlive.com
    3. Click "Continue"
    4. Access permission screen appears
    5. Click "Allow"
- **Expected Result:** Login screen should be displayed after entering the URL.
- **Actual Result:** Authentication behavior is inconsistent.
  - Sometimes results in "Authentication Failed" error,
  - sometimes redirects to home page without login screen.
  - Login screen is never displayed on iOS.
- **Screenshot:** ![BUG-08 Inconsistent Authentication](../mobile-testing/screenshots/bug-08-ios-auth-failed.jpeg)