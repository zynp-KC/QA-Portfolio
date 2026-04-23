# Test Cases — Cart
- **Module:** Cart
- **Total Test Cases:** 10
- **Created by:** Zeynep KC
- **Date:** 2026-04-22

---

## TC-001
- **Title:** Add product to cart
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Navigate to Cart page
    5. Observe the cart
- **Expected Result:** Product should be successfully added to cart and visible in cart
- **Priority:** High
- **Status:** Not Executed

---

## TC-002
- **Title:** View cart contents
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Navigate to Cart page
    5. Observe the cart contents
- **Expected Result:** Cart contents should be displayed successfully
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-003
- **Title:** Remove product from cart
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Navigate to Cart page
    5. Click "Delete" button next to the product
    6. Observe the cart
- **Expected Result:** Product should be successfully removed from cart
- **Priority:** High
- **Status:** Not Executed

---

## TC-004
- **Title:** Add multiple products to cart
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on first product
    3. Click "Add to cart" button
    4. Go back to homepage
    5. Click on second product
    6. Click "Add to cart" button
    7. Navigate to Cart page
    8. Observe cart contents
- **Expected Result:** All added products should be visible in cart
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-005
- **Title:** Cart total price displayed correctly
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Navigate to Cart page
    5. Observe total price
- **Expected Result:** Total price should equal the sum of all products in cart
- **Priority:** High
- **Status:** Not Executed

---

## TC-006
- **Title:** Add to cart without login
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Navigate to Cart page
    5. Click "Place Order" button
- **Expected Result:** Warning should be displayed — user must be logged in to place an order
- **Priority:** High
- **Status:** Not Executed
- **Note:** Known bug — guest users can add to cart and place order without login

---

## TC-007
- **Title:** Add same product twice
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Go back to homepage
    5. Click on the same product again
    6. Click "Add to cart" button
    7. Navigate to Cart page
    8. Observe cart contents
- **Expected Result:** Product should appear twice in cart or quantity should increase
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-008
- **Title:** Cart is empty after removing all products
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Navigate to Cart page
    5. Click "Delete" button next to the product
    6. Observe the cart
- **Expected Result:** Cart should be displayed as empty
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-009
- **Title:** Cart persists after page refresh
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Navigate to Cart page
    5. Refresh the page
    6. Observe the cart contents
- **Expected Result:** Cart contents should remain the same after page refresh
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-010
- **Title:** Place order from cart page
- **Preconditions:** User is on the homepage
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Click on a product
    3. Click "Add to cart" button
    4. Navigate to Cart page
    5. Click "Place Order" button
- **Expected Result:** Place order modal should be displayed
- **Priority:** Medium
- **Status:** Not Executed

---