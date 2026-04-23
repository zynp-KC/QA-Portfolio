## BUG-08
- **Title:** Contact form data persists after closing modal
- **Module:** Contact
- **Severity:** Low
- **Priority:** P3
- **Status:** Open
- **Environment:**
    - URL: https://www.demoblaze.com
    - Browser: Chrome
    - OS: Windows 11
- **Steps to Reproduce:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Contact" on the navbar
    3. Enter text in the message field
    4. Click "Close" button
    5. Click "Contact" on the navbar again
    6. Observe the message field
- **Expected Result:** Form should be cleared after closing — all fields should be empty when reopened
- **Actual Result:** Previously entered message remains in the form after closing and reopening the modal
- **Screenshot:** Not available
- **Note:** Arguable behavior — could be intentional. Recommended improvement: clear form on close for privacy reasons. Discovered during exploratory testing — no test case exists for this scenario.