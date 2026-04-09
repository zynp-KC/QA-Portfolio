## BUG-03

- **ID:** BUG-03
- **Title:** Special characters are accepted in employee name fields
- **Module:** PIM / Add Employee
- **Severity:** Medium
- **Priority:** P2
- **Status:** Open
- **Environment:**
  - Web: [OrangeHRM demo](https://opensource-demo.orangehrmlive.com/)
  - Browser: Chrome
  - OS: Windows 11
- **Preconditions:**
  - Valid admin credentials are available
  - User is logged in to the system
- **Steps to Reproduce:**
  1. Open the OrangeHRM demo site
  2. Log in with valid admin credentials
  3. Go to the **PIM** module
  4. Click the **Add Employee** button
  5. Enter `test!#$` in the **First Name** field
  6. Fill in any other required fields
  7. Click the **Save** button
- **Expected Result:** The system should reject special characters in name fields and display a validation warning message.
- **Actual Result:** The employee record is created successfully even though the **First Name** field contains special characters.
- **Attachment:** ![BUG-03 Special Characters](screenshots/bug-03-special-chars-name.png)