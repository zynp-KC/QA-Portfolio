# Test Cases — PIM (Employee Management)
- **Module:** PIM
- **Total Test Cases:** 15
- **Created by:** Zeynep KC
- **Date:** 2026-04-06

---

## TC-016
- **Title:** Add employee with valid mandatory fields only
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Add Employee" button
    2. Enter First Name: John
    3. Enter Last Name: Doe
    4. Click Save button
- **Expected Result:** Employee successfully added and redirected to employee profile page
- **Priority:** High
- **Status:** Not Executed

---

## TC-017
- **Title:** Add employee with fields empty
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Add Employee" button
    2. Leave all fields empty
    3. Click Save button
- **Expected Result:** "Required" warning displayed below First Name and Last Name fields
- **Priority:** High
- **Status:** Not Executed

---

## TC-018
- **Title:** Add employee with special characters in name fields (!@#$%)
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Add Employee" button
    2. Enter First Name: Joe!#
    3. Enter Last Name: Doe
    4. Click Save button
- **Expected Result:** Warning displayed — special characters (should not be accepted in name fields)
- **Priority:** Medium
- **Status:** Not Executed
- **Note:** Known bug – BUG-03

---

## TC-019
- **Title:** Add employee with very long first/last name (30+characters)
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Add Employee" button
    2. Enter First Name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    3. Enter Last Name: Doe
    4. Click Save button
- **Expected Result:** "Should not exceed 30 characters" warning displayed below First Name and Last Name fields
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-020
- **Title:** Add employee with duplicate Employee ID
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Add Employee" button
    2. Enter First Name: Joe
    3. Enter Last Name: Doe
    4. Enter Employee ID: 0400
    5. Click Save button
    6. Click "Add Employee" button
    7. Enter First Name and Last Name
    8. Enter Employee ID: 0400
    9. Click Save button
- **Expected Result:** "Duplicated Employee ID" warning displayed
- **Priority:** High
- **Status:** Not Executed

---

## TC-021
- **Title:** Add employee with numbers in name field (e.g. "John123")
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Add Employee" button
    2. Enter First Name: John123
    3. Enter Last Name: Doe
    4. Click Save button
- **Expected Result:** Warning displayed — numeric characters (should not be accepted in name fields)
- **Priority:** Medium
- **Status:** Not Executed
- **Note:** Known improvement – IMP-01

---

## TC-022
- **Title:** Edit existing employee name and save
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Employee List" in PIM
    2. Click on an existing employee (e.g. John Doe)
    3. Update First Name: John Updated
    4. Click Save button
- **Expected Result:** Employee name successfully updated and changes reflected in employee list
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-023
- **Title:** Delete employee with confirmation
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Employee List" in PIM
    2. Click on an existing employee
    3. Click Delete button
    4. Confirm deletion on confirmation dialog
- **Expected Result:** Confirmation dialog displayed before deletion. Employee successfully deleted and no longer visible in employee list
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-024
- **Title:** Employee role: access to PIM module
- **Preconditions:**
    - User is logged in as Employee
- **Steps:**
    1. Log in as Employee (testemployee / Test1234!)
    2. Observe left sidebar menu
- **Expected Result:** PIM module is not visible 
in the sidebar for Employee role
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-025
- **Title:** Employee can only view own profile
- **Preconditions:**
    - User is logged in as Employee
- **Steps:**
    1. Log in as Employee (testemployee / Test1234!)
    2. Click "My Info" from left sidebar
    3. Observe visible employee data
- **Expected Result:** Employee can only view and edit 
own profile — other employees' data not accessible
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-026
- **Title:** Search employee by name
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Employee List" button
    2. Enter Employee Name
    3. Click Search button
- **Expected Result:** Matching employee record displayed in the list. Non-matching records not shown.
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-027
- **Title:** Search employee by ID
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Employee List" button
    2. Enter Employee ID
    3. Click Search button
- **Expected Result:** Employee with matching ID displayed.Non-matching records not shown.
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-028
- **Title:** Add employee with only First Name (no Last Name)
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Add Employee" button
    2. Enter First Name: John
    3. Leave Last Name field
    4. Click Save button
- **Expected Result:** "Required" warning displayed below Last Name field
- **Priority:** High
- **Status:** Not Executed

---

## TC-029
- **Title:** Employee profile photo upload
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Click "Employee List" in PIM
    2. Click on an existing employee
    3. Click on profile photo area
    4. Upload a valid image file (JPG/PNG)
    5. Click Save button
- **Expected Result:** Profile photo successfully uploaded and displayed on employee profile 
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-030
- **Title:** Reports reflect correctly after add/edit/delete
- **Preconditions:**
    - User is logged in as Admin
    - User is on the PIM page
- **Steps:**
    1. Add a new employee (e.g. Test Report)
    2. Click "Reports" from PIM menu
    3. Run "Employee Contact Details Report"
    4. Verify new employee appears in report
    5. Delete the employee
    6. Re-run the report
- **Expected Result:** Report reflects added employee after creation. Report no longer shows employee after deletion.
- **Priority:** Medium
- **Status:** Not Executed

---