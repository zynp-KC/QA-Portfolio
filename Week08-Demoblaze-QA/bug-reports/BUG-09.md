## BUG-09
- **Title:** Login intermittently fails with no server response and no user feedback
- **Module:** Authentication
- **Severity:** High
- **Priority:** P2
- **Status:** Open
- **Environment:** https://www.demoblaze.com — reproduced on Firefox, Chromium, WebKit
- **Steps to Reproduce:**
    1. Navigate to https://www.demoblaze.com
    2. Click "Log in" and enter valid credentials
    3. Click the "Log in" button
    4. Repeat 15 times
- **Expected Result:** Login succeeds, or a clear error is shown to the user on failure
- **Actual Result:** Intermittently (~13% of attempts), the `/login` request produces no server response at all. The modal closes, `#nameofuser` stays empty, and no alert, error message, spinner, or feedback of any kind is displayed. The user cannot tell that login failed.
- **Evidence:** A network listener logged every `/login` response across 15 isolated runs. 13 runs returned `200` with a valid token (`Auth_token: <base64>`). The 2 failing runs produced **no response event at all** — no status, no body.
- **Frequency:** 2/15 (~13%) on Firefox; also observed on Chromium and WebKit
- **Investigation:** Ruled out as a test-side issue. Reproduced with a single isolated test, single worker, serial execution, no preceding tests, and identical code on every iteration. Test isolation, execution order, browser engine, parallelism, headless mode, account lockout, and cumulative load were all eliminated.
- **Impact:** Users may be silently rejected at login with zero indication of failure.