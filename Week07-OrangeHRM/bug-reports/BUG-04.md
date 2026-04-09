## BUG-04

- **ID:** BUG-04
- **Title:** Leave can be assigned despite insufficient leave balance
- **Module:** Leave / Assign Leave
- **Severity:** High
- **Priority:** P1
- **Status:** Open
- **Environment:**
  - Web: [OrangeHRM demo](https://opensource-demo.orangehrmlive.com/)
  - Browser: Chrome
  - OS: Windows 11
- **Preconditions:**
  - Valid admin credentials are available
  - An employee with `0` leave balance exists
- **Steps to Reproduce:**
  1. Open the OrangeHRM demo site
  2. Log in with valid admin credentials
  3. Go to the **Leave** module
  4. Click the **Assign Leave** button
  5. Select an employee with `0` leave balance
  6. Enter the leave details and submit the request
  7. When the **Insufficient Leave Balance** warning appears, click **OK**
- **Expected Result:** The leave assignment should be blocked when the employee does not have enough leave balance.
- **Actual Result:** The leave request is still assigned despite the warning, and the employee’s balance drops to `-21.00`.
- **Attachment:** ![BUG-04 Negative Leave Balance](screenshots/bug-04-negative-leave-balance.png)