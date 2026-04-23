## BUG-02
- **Title:** Guest user can checkout without login
- **Module:** Cart / Checkout
- **Severity:** High
- **Priority:** P1
- **Status:** Open
- **Environment:**
    - URL: https://www.demoblaze.com
    - Browser: Chrome
    - OS: Windows 11
- **Steps to Reproduce:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Navigate to Cart page
    5. Click "Place Order" button
    6. Fill in the form and click "Purchase"
- **Expected Result:** Warning should be displayed — user must be logged in to place an order
- **Actual Result:** Guest user can successfully add products to cart and complete the checkout process without being logged in. No authentication required.
- **Screenshot:** Not available