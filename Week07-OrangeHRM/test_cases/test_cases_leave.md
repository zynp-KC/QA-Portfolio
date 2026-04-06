# Test Cases — Leave Management
- **Module:** Leave
- **Total Test Cases:** 15
- **Created by:** Zeynep KC
- **Date:** 2026-04-06

---

## TC-031
- **Title:** Apply leave with valid mandatory fields
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Assign Leave" button
    2. Enter Employee Name: John Doe
    3. Enter Leave Type: CAN-Personal
    4. Enter From-To Date:2026-06-04 — 2026-08-04
    5. Click Save button
- **Expected Result:** Leave successfully assigned and visible in employee's leave list
- **Priority:** High
- **Status:** Not Executed

---

## TC-032
- **Title:** Apply leave without selecting dates
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Assign Leave" button
    2. Enter Employee Name: John Doe
    3. Enter Leave Type: CAN-Personal
    4. Leave From-To Date
    5. Click Save button
- **Expected Result:** "Required" warning displayed below From Date and To date fields
- **Priority:** High
- **Status:** Not Executed

---

## TC-033
- **Title:** Apply leave without selecting leave type
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Assign Leave" button
    2. Enter Employee Name: John Doe
    3. Empty Leave Type
    4. Enter From-To Date
    5. Click Save button
- **Expected Result:** "Required" warning displayed below Leave Type field
- **Priority:** High
- **Status:** Not Executed

---

## TC-034
- **Title:** Assign leave to employee with 0 balance
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Assign Leave" button
    2. Enter Employee Name: John Doe (0 leave balance)
    3. Enter Leave Type: CAN-Personal
    4. Enter From Date: 2026-06-04
    5. Enter To Date: 2026-06-05
    6. Click Save button
- **Expected Result:** System should prevent leave assignment and display "Insufficient Leave Balance" warning
- **Priority:** High
- **Status:** Not Executed

---

## TC-035
- **Title:** Leave balance goes negative after assignment
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Assign Leave" button
    2. Enter Employee Name: sww test
    3. Enter Leave Type: CAN-Personal
    4. Enter From Date: 2026-01-04
    5. Enter To Date: 2026-03-04
    6. Click Save button
- **Expected Result:** System should block assignment when balance is insufficient. Balance should not go below 0.
- **Priority:** High
- **Status:** Not Executed
- **Note:** Known bug — BUG-04

---

## TC-036
- **Title:** Employee can view own leave list only
- **Preconditions:**
    - User is logged in as Employee
    - User is on the Leave page
- **Steps:**
    1. Click "Leave" from left sidebar
    2. Click "My Leave" 
    3. Observe leave list
- **Expected Result:** Only own leave records visible — 
other employees' leave data not accessible
- **Priority:** High
- **Status:** Not Executed

---

## TC-037
- **Title:** Leave entitlement add
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Entitlements" button
    2. Choose Add Entitlements button
    3. Enter Employee Name: test employee
    4. Enter Leave Type: CAN-Personal
    5. Enter Leave Period: 2026-01-04-2026-01-03
    6. Enter Entitlement
    7. Click Save button
- **Expected Result:** Leave entitlement successfully added and reflected in employee's leave balance
- **Priority:** High
- **Status:** Not Executed

---

## TC-038
- **Title:** Leave entitlement delete
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Entitlements" from Leave menu
    2. Click "Leave Entitlements" 
    3. Find existing entitlement
    4. Click Delete button
    5. Confirm deletion
- **Expected Result:** Entitlement successfully deleted and no longer visible in entitlement list
- **Priority:** High
- **Status:** Not Executed

---

## TC-039
- **Title:** Leave list filter by status (Pending Approved)
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Leave List" from Leave menu
    2. Enter Show Leave with Status: Pending Approved
    3. Click Search
- **Expected Result:** Only leaves with "Pending Approval" status displayed in the list. Other status records filtered out.
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-040
- **Title:** Apply leave for past date
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Assign Leave"
    2. Enter Employee Name 
    3. Enter Leave Type
    4. Enter From Date: 2026-01-04 (past date)
    5. Enter To Date: 2026-01-05
    6. Click Save button
- **Expected Result:** System should display warning — 
past date leave assignment should not be allowed
- **Priority:** High
- **Status:** Not Executed

---

## TC-041
- **Title:**  Apply leave with invalid date format
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Assign Leave" from Leave menu
    2. Enter Employee Name 
    3. Enter Leave Type
    4. Enter From Date: 04-06-2026 (wrong format)
    5. Enter To Date: 05-06-26
- **Expected Result:** "Should be a valid date in yyyy-dd-mm format" warning displayed
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-042
- **Title:**  Leave entitlement edit
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Entitlements" from Leave menu
    2. Click "Leave Entitlements"
    3. Find existing entitlement
    4. Click Edit button
    5. Update entitlement value
    6. Click Save button
- **Expected Result:** Entitlement successfully updated 
and new value reflected in employee's leave balance
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-043
- **Title:**  Admin can view all employees' leave list
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click Leave List
    2. Observe leave list
- **Expected Result:** All employees' leave records visible in leave list — Admin has full access to all leave data
- **Priority:** High
- **Status:** Not Executed

---

## TC-044
- **Title:** Apply leave for duplicate date
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Assign Leave" from Leave menu
    2. Enter Employee Name: test employee
    3. Enter Leave Type
    4. Enter From Date: 2026-01-04
    5. Enter To Date: 2026-01-04
    6. Click Save button
    7. Click "Assign Leave" again (test employee)
    8. Enter same From Date: 2026-01-04
    9. Enter same To Date: 2026-01-04
    10. Click Save button 
- **Expected Result:** Duplicate date warning displayed
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-045
- **Title:**  Leave report generation
- **Preconditions:**
    - User is logged in as Admin
    - User is on the Leave page
- **Steps:**
    1. Click "Reports" from Leave menu
    2. Select report type: "My Leave Entitlements"
    3. Click View button
- **Expected Result:** Leave report successfully generated and displayed with correct data
- **Priority:** Medium
- **Status:** Not Executed