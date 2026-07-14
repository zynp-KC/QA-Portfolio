## BUG-11
- **Title:** Checkout does not submit order data — only clears the cart
- **Module:** Checkout
- **Severity:** Critical
- **Priority:** P1
- **Status:** Open
- **Environment:** https://www.demoblaze.com
- **Steps to Reproduce:**
    1. Log in, add a product, open the cart
    2. Click "Place Order", fill in name, country, city, credit card, month, year
    3. Click "Purchase" and inspect the network activity
- **Expected Result:** Order details are submitted to the server and persisted as an order
- **Actual Result:** The only request sent is `POST /deletecart`, which responds `"Item deleted."`. None of the form data (name, country, city, credit card, expiry) is transmitted anywhere. No order is created — the cart is simply emptied and a success message is shown.
- **Evidence:** Full network capture of the checkout flow shows `check`, `viewcart`, `view`, and `deletecart` requests only. No order-creation endpoint is ever called.
- **Impact:** Purchases are never recorded. This also explains BUG-03 and BUG-04: there is no server-side validation of the credit card because the card number is never sent to a server.
- **Related:** BUG-03, BUG-04, BUG-10