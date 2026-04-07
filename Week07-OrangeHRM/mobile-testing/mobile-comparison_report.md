# Mobile Testing — Cross-Platform Comparison Report
- **Application:** OrangeHRM Mobile
- **Date:** 2026-04-07
- **Tester:** Zeynep KC
- **Devices:**
    - iOS: iPhone 13
    - Android: Samsung Galaxy A21s

---

## Login Flow

| Feature | iOS | Android |
|---|---|---|
| Login screen | ❌ Not displayed | ✅ Displayed |
| Authentication | URL -> Access flow | Username/Password |
| Session persistence | Inconsistent | Stable |
| Logout | ❌ Not working properly | ⚠️ Returns to home |

---

## UI/Layout

| Feature | iOS | Android |
|---|---|---|
| General layout | ✅ Same | ✅ Same |
| Sidebar navigation | ✅ Works | ✅ Works |
| Back navigation | ❌ No back button | ✅ Back button available |
| My Attendance title - < > arrows | ⚠️ Partially cut off | ✅ Fully visible |
| Employee Attendance title | ⚠️ Truncated | ✅ Full title visible |
| Employee Attendance arrows | ⚠️ Partially cut off | ✅ Fully visible |

---

## Performance

| Feature | iOS | Android |
|---|---|---|
| General speed | ⚠️ Slow | ⚠️ Slow|
| Relative performance | Slightly faster | Slightly slower |

---

## Leave Module

| Feature | iOS | Android |
|---|---|---|
| Apply Leave UI | ✅ Same | ✅ Same |
| Leave List | ✅ Same | ✅ Same |

---

## Time Module

| Feature | iOS | Android |
|---|---|---|
| Punch In/Out | ✅ Works | ✅ Works |
| My Attendance | ✅ Works | ✅ Works |
| Employee Attendance | ✅ Works | ✅ Works |

---

## Bugs Found – Mobile

| ID | Platform | Summary | Severity | Priority |
|---|---|---|---|---|
| BUG-08 | iOS | Inconsistent authentication flow — Authentication Failed on some attempts | High | P2 |
| BUG-09 | iOS | My Attendance — navigation arrows partially cut off | Low | P3 |
| BUG-10 | iOS | Employee Attendance — title truncated and arrows cut off | Low | P3 |

---

## Test Limitations

- iOS login flow could not be fully tested — login screen not consistently displayed
- Demo environment is shared — overlapping errors observed but attributed to concurrent user activity, not platform bugs
- Performance testing not in scope — observations are subjective

---

## Evidence

**BUG-08**
![BUG-8 iOS Authentication Failed](screenshots/bug-08-ios-auth-failed.jpeg)

**BUG-09**
![BUG-09 iOS Attendance Arrows Cut Off](screenshots/bug-09-ios-attendance-arrows.jpeg)

**BUG-10**
![BUG-10 iOS Employee Attendance Truncated](screenshots/bug-10-ios-employee-attendance-truncated.jpeg)