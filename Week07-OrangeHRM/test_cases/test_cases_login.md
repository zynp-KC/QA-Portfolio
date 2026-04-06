# Test Cases — Login & Authentication
- **Module:** Login
- **Total Test Cases:** 15
- **Created by:** Zeynep KC
- **Date:** 2026-04-06

---

## TC-001
- **Title:** Successful login with valid username and password
- **Preconditions:**
    - User has a valid account (Admin / admin123)
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username: Admin
    3. Enter valid password: admin123
    4. Click Login button
- **Expected Result:** User is redirected to Dashboard page successfully
- **Priority:** High
- **Status:** Not Executed

---

## TC-002
- **Title:** Login with empty username
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Leave username field empty
    3. Enter valid password: admin123
    4. Click Login button
- **Expected Result:** "Username is Required" warning displayed below username field
- **Priority:** High
- **Status:** Not Executed

---

## TC-003
- **Title:** Login with empty password
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username: Admin
    3. Leave password field empty
    4. Click Login button
- **Expected Result:** "Password is Required" warning displayed below password field
- **Priority:** High
- **Status:** Not Executed

---

## TC-004
- **Title:** Both fields empty
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Leave password and username fields
    3. Click Login button
- **Expected Result:** "Username is Required" warning displayed below username field and "Password is Required" warning displayed below password field
- **Priority:** High
- **Status:** Not Executed

---

## TC-005
- **Title:** Login with invalid username and invalid password
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter invalid username: invaliduser123
    3. Enter invalid password: invalidpass123
    4. Click Login button
- **Expected Result:** "Invalid credentials" warning displayed
- **Priority:** High
- **Status:** Not Executed

---

## TC-006
- **Title:** Login with valid username and wrong password
- **Preconditions:**
    - User has a valid account
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username: Admin
    3. Enter invalid password: invalidadmin1
    4. Click Login button
- **Expected Result:** "Invalid credential" warning displayed on the form
- **Priority:** High
- **Status:** Not Executed

---

## TC-007
- **Title:** SQL injection attempt in username field
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter SQL injection string in username: ' OR '1'='1
    3. Enter any password: admin123
    4. Click Login button
- **Expected Result:** "Invalid credential" warning displayed below username field
- **Priority:** High
- **Status:** Not Executed

---

## TC-008
- **Title:** Multiple failed login attempts (brute force)
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username: Admin
    3. Enter invalid password: invalidadmin123
    4. Click Login button
    5. Repeat steps 2-4 five times consecutively
- **Expected Result:** Account should be locked after multiple failed attempts. Warning message displayed.
- **Priority:** High
- **Status:** Not Executed

---

## TC-009
- **Title:** Login with spaces before/after username
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter invalid username:" Admin"
    3. Enter validd password:admin123
    4. Click Login button
- **Expected Result:** "Invalid Credentials" warning displayed — system not accept username with leading/trailing spaces
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-010
- **Title:** Forgot password – 504 error
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Click "Forgot your password?" link
    3. Enter valid username:Admin
    4. Click Reset Password button
- **Expected Result:** User should receive password reset email or success confirmation message
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-011
- **Title:** Password masking behavior
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username: Admin
    3. Type any characters in the password field
    4. Observe the password field
- **Expected Result:** Typed characters are masked and displayed as dots/asterisks
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-012
- **Title:** Copy-paste into password field
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username: Admin
    2. Copy valid password: admin123
    3. Click Login button
- **Expected Result:** Login successful – copy-paste into password field works as expected
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-013
- **Title:** Login with very long username (100+ characters)
- **Preconditions:**
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    3. Enter any password: admin123
    4. Click Login button
- **Expected Result:** "Invalid credentials" warning displayed
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-014
- **Title:** Browser back button after successful login
- **Preconditions:**
    - User has a account
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username:Admin
    3. Enter valid password:admin123
    4. Click Login button
    5. Click browser back button
- **Expected Result:** User should remain on login page and credentials should be cleared from fields
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-015
- **Title:** Successful logout after login
- **Preconditions:**
    - User has a account
    - User is on the login page
- **Steps:**
    1. Navigate to https://opensource-demo.orangehrmlive.com
    2. Enter valid username: Admin
    3. Enter valid password: admin123
    4. Click Login button
    5. Click on user profile icon (top right)
    6. Click Logout
- **Expected Result:** User is redirected to login page and session is terminated
- **Priority:** High
- **Status:** Not Executed