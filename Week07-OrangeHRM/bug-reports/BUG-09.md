## BUG-09

- **ID:** BUG-09
- **Title:** Navigation arrows are partially cut off on My Attendance page in iOS
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
  4. Go to **My Attendance**
  5. Observe the page layout
- **Expected Result:** The navigation arrows should be fully visible within the screen boundaries.
- **Actual Result:** The navigation arrows are partially cut off and extend beyond the screen boundary. The same area displays correctly on Android.
- **Attachment:** ![BUG-09 iOS Attendance Arrows Cut Off](../mobile-testing/screenshots/bug-09-ios-attendance-arrows.jpeg)