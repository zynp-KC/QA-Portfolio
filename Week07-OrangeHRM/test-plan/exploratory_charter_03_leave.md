# Exploratory Test Charter — 03
## Leave Management

**Mission:**
Explore leave request creation and approval flow to identify validation gaps, business rule violations and role-based access issues.

**Target Area:**
- Apply Leave (Employee role)
- Leave List (Admin role)
- Assign Leave  (Admin role)
- Leave Entitlements

**Time Box:** 30 dakika

**Test Ideas:**
- Apply leave without selecting dates
- Apply leave without selecting leave type
- Apply leave for past date – is it allowed?
- Apply leave for a date taht already has leave – duplicate?
- Assign leave to employee wtih 0 balance – allowed?
- Leave balance goes negative – not others?
- Rejected leave still ahowing in list?
- Leave entitlement add/edit/delete working correctly?
- Date format validation – wrong format accepted?

**Risks to Investigate:**
- Missing mandatory field validation
- Business rule: leave balance going negative
- Duplicate leave requests on same date
- Role-based access on leave data

**Notes:**
| Observation | Expected | Actual | Result |
|---|---|---|---|
| Apply leave without selecting dates | Required warning displayed | Required displayed | ✅ Pass |
| Apply leave without selecting leave type | Required warning displayed | Required displayed | ✅ Pass |
| Apply leave for past date | Should be restricted | Could not test — 0 leave balance | ❓ Blocked |
| Apply leave for duplicate date | Should show error | Could not test — 0 leave balance | ❓ Blocked |
| Assign leave to employee with 0 balance | Should not be allowed | Warning shown but assignment allowed | 🐛 Bug |
| Leave balance goes negative | Should not go below 0 | Balance reached -21.00 | 🐛 Bug |
| Employee can see own leaves only | Other employees' leaves not visible | Only own leaves visible | ✅ Pass |
| Rejected leave still showing in list | Could not test — no leave requests created | Could not test | ❓ Blocked |
| Leave entitlement add/edit/delete | Should work correctly | Working correctly | ✅ Pass |
| Date format validation | Should not accept wrong format | "Should be a valid date in yyyy-dd-mm format" displayed | ✅ Pass |

**Bugs Found:**
| ID | Summary | Severity | Priority |
|---|---|---|---|
| BUG-04 | Leave balance goes negative – system warns but does not prevent assignment. Balance reached -21.00 | High | P1 |

**Test Limitations:**
- Leave balance was 0 for all employees in demo environment
- Could not fully test duplicate leave and past date scenarios
- Demo environment is shared – data may change between sessions