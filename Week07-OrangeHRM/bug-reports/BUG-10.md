## BUG-10

- **ID:** BUG-10
- **Title:** Text truncation and layout issues on Employee Attendance page in iOS
- **Module:** Mobile / iOS / UI
- **Severity:** Low
- **Priority:** P3
- **Status:** Open
- **Environment:**
  - App: OrangeHRM Mobile
  - Device: iPhone 13
  - OS: iOS
- **Preconditions:**
  - Valid admin credentials are available
- **Steps to Reproduce:**
  1. Open the OrangeHRM mobile app on iOS
  2. Enter the URL: [OrangeHRM demo](https://opensource-demo.orangehrmlive.com/)
  3. Log in with valid admin credentials
  4. Go to **Employee Attendance**
  5. Observe the page layout
- **Expected Result:**
  - The page title **Employee Attendance** should be fully visible.
  - The back/navigation arrow should be fully visible on the screen.
- **Actual Result:**
  - The page title is truncated and displayed as `Employee Attendan...`
  - The navigation arrow is partially cut off beyond the screen boundary.
  - The same area displays correctly on Android.
- **Attachment:** ![BUG-10 iOS Employee Attendance title truncated](../mobile-testing/screenshots/bug-10-ios-employee-attendance-truncated.jpeg)