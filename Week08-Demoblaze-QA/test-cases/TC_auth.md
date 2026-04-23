# Test Cases — Authentication
- **Module:** Authentication
- **Total Test Cases:** 12
- **Created by:** Zeynep KC
- **Date:** 2026-04-22

---

## TC-001
- **Title:** Successful login with valid credentials
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Log in" button on navbar
    3. Enter valid username
    4. Enter valid password
    5. Click Login button
- **Expected Result:** User successfully logged in and redirected to homepage
- **Priority:** High
- **Status:** Not Executed

---

## TC-002
- **Title:** Login with invalid password
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Log in" button on navbar
    3. Enter valid username
    4. Enter invalid password
    5. Click Login button
- **Expected Result:** An error message should be displayed
- **Priority:** High
- **Status:** Not Executed

---

## TC-003
- **Title:** Login with empty username
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Log in" button on navbar
    3. Leave username field empty
    4. Enter valid password
    5. Click Login button
- **Expected Result:** Warning message should be displayed
- **Priority:** High
- **Status:** Not Executed

---

## TC-004
- **Title:** Login with both fields empty
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Log in" button on navbar
    3. Leave username and password fields empty
    4. Click Login button
- **Expected Result:** Warning messages should be displayed for both username and password fields
- **Priority:** High
- **Status:** Not Executed

---

## TC-005
- **Title:** Successful signup with valid credentials
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Sign up" button on navbar
    3. Enter a new username
    4. Enter a new password
    5. Click Sign up button
- **Expected Result:** Account should be created successfully
- **Priority:** High
- **Status:** Not Executed

---

## TC-006
- **Title:** Signup with already registered username
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Sign up" button on navbar
    3. Enter already registered username
    4. Enter a password
    5. Click Sign up button
- **Expected Result:** Warning message should be displayed
- **Priority:** High
- **Status:** Not Executed

---

## TC-007
- **Title:** Signup with empty fields
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Sign up" button on navbar
    3. Leave all fields empty
    4. Click Sign up button
- **Expected Result:** Warning message should be displayed
- **Priority:** High
- **Status:** Not Executed

---

## TC-008
- **Title:** Successful logout
- **Preconditions:** User is logged in
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Log in" button on navbar
    3. Enter valid username
    4. Enter valid password
    5. Click Login button
    6. Click "Log out" button on navbar
- **Expected Result:** User should be succesfully logged out
- **Priority:** High
- **Status:** Not Executed

---

## TC-009
- **Title:** Login with  empty password
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Log in" button on navbar
    3. Enter valid username
    4. Leave password field empty
    5. Click Login button
- **Expected Result:** Warning message should be displayed
- **Priority:** High
- **Status:** Not Executed

---

## TC-010
- **Title:** Signup with only username (no password)
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Sign up" button on navbar
    3. Enter a new username
    4. Leave password field empty
    5. Click Sign up button
- **Expected Result:** Warning message should be displayed for password field
- **Priority:** High
- **Status:** Not Executed

---

## TC-011
- **Title:** Login with SQL injection in username field
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Log in" button on navbar
    3. Enter SQL injection in username field: ' OR '1'='1
    4. Enter valid password
    5. Click Login button
- **Expected Result:** An error message should be displayed
- **Priority:** High
- **Status:** Not Executed

---

## TC-012
- **Title:** Login with special characters in username
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Log in" button on navbar
    3. Enter username with special characters: test#$%
    4. Enter any password
    5. Click Login button
- **Expected Result:** Warning message should be displayed
- **Priority:** High
- **Status:** Not Executed