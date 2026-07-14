## BUG-03
- **Title:** Credit card accepts letters
- **Module:** Checkout
- **Severity:** High
- **Priority:** P1
- **Status:** Open
- **Environment:**
    - URL: https://www.demoblaze.com
    - Browser: Chrome
    - OS: Windows 11
- **Steps to Reproduce:**
    1. Navigate to https://www.demoblaze.com
    2. Add a product to cart
    3. Navigate to Cart page
    4. Click "Place Order" button
    5. Enter Name: Test User
    6. Enter Country: Turkey
    7. Enter City: Bursa
    8. Enter Credit Card: abcdef
    9. Enter Month: 04
    10. Enter Year: 2026
    11. Click "Purchase" button
- **Expected Result:** Invalid credit card warning should be displayed
- **Actual Result:** Order is completed successfully despite invalid credit card input. No warning message is displayed.
- **Screenshot:** Not available
- **Root cause:** See BUG-11 — the credit card number is never transmitted to any server, so server-side validation is impossible.