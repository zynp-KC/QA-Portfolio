# Exploratory Test Charter — 02
## PIM – Employee Management

**Mission:**
Explore employee creation, editing and deletion to identify data validation issues, missing field restrictions and role-based access vulnerabilities.

**Target Area:**
- Add Employee
- Employee List
- Employee Profile editing
- Reports

**Time Box:** 30 dakika

**Test Ideas:**
- Add employee with all fields empty
- Add employee with only mandatory fields
- Add employee with special characters in name fields
- Add employee with very long first/last name
- Add duplicate employee ID – what happens?
- Add employee with numbers in name field
- Edit existing employee data and save
- Delete an employee – confirmation dialog present?
- Employee role: can they see other employees' data?
- Reports: does data reflect correctly after add/edit/delete?

**Risks to Investigate:**
- Missing mandatory field validation
- Duplicate ID handling
- Data integrity after CRUD operations
- Role-based access on employee data

**Notes:**

| Observation | Expected | Actual | Result |
|---|---|---|---|
| Add employee with all fields empty | Username and last name required warning | Username and last name required displayed | ✅ Pass |
| Add employee with only mandatory fields | Employee added successfully | Added successfully | ✅ Pass |
| Add employee with special characters (!@#$%) in name fields | Special characters should not be allowed | Successfully saved | 🐛 Bug |
| Add employee with very long first/last name | Character limit warning | Should not exceed 30 characters displayed | ✅ Pass |
| Add duplicate employee ID | Should not be allowed | Employee Id already exists displayed | ✅ Pass |
| Add employee with numbers in name field | Numbers should not be allowed in name | Successfully saved | ⚠️ Improvement |
| Edit existing employee data and save | Changes saved successfully | Saved successfully | ✅ Pass |
| Delete an employee — confirmation dialog | Confirmation dialog should appear | Are you sure? dialog displayed | ✅ Pass |
| Employee role: can they see other employees' data? | Should not be visible | Other employees' data not visible | ✅ Pass |
| Reports: data reflects after add/edit/delete | Reports should update correctly | Reports updated correctly | ✅ Pass |

**Bugs Found:**

| ID | Summary | Severity | Priority |
|---|---|---|---|
| BUG-03 | Special characters (!@#$%) accepted in employee name fields | Medium | P2 |

**Improvements:**

| ID | Summary |
|---|---|
| IMP-01 | Name fields should restrict numeric characters for data quality |