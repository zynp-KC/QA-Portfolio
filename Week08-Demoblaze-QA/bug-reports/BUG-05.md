## BUG-05
- **Title:** Same product can be added unlimited times
- **Module:** Cart
- **Severity:** Medium
- **Priority:** P2
- **Status:** Open
- **Environment:**
    - URL: https://www.demoblaze.com
    - Browser: Chrome
    - OS: Windows 11
- **Steps to Reproduce:**
    1. Navigate to https://www.demoblaze.com
    2. Add a product to cart
    3. Go to homepage
    4. Repeat steps 2-3 twenty times
    5. Navigate to Cart page
- **Expected Result:** System should limit the number of times the same product can be added to cart, or display a warning
- **Actual Result:** Same product can be added to cart unlimited times without any restriction or warning. Product was added 20+ times successfully.
- **Screenshot:** ![BUG-05 Unlimited Add to Cart](screenshots/bug-05-unlimited-add-to-cart.png)
- **Note:** Discovered during exploratory testing — no test case exists for this scenario