## BUG-10
- **Title:** Order confirmation displayed before the server responds (fire-and-forget checkout)
- **Module:** Checkout
- **Severity:** High
- **Priority:** P1
- **Status:** Open
- **Environment:** https://www.demoblaze.com — reproduced on Chromium, Firefox, WebKit
- **Steps to Reproduce:**
    1. Log in and add a product to the cart
    2. Open the cart and click "Place Order"
    3. Fill in the form and click "Purchase"
    4. Inspect the network activity
- **Expected Result:** The confirmation appears only after the server confirms the order
- **Actual Result:** The SweetAlert confirmation ("Thank you for your purchase!") is rendered immediately after the request is dispatched, without waiting for the server response. The response arrives afterwards.
- **Evidence:** Network logging shows `POST /deletecart` fires, the confirmation renders, and only later does the response `200 "Item deleted."` arrive. A test asserting on the confirmation alone passes before any response exists.
- **Impact:** If the server rejects, times out, or fails, the user still sees a success message. The user cannot distinguish a completed order from a failed one.