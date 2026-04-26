# Test Cases — Checkout
- **Module:** Checkout
- **Total Test Cases:** 8
- **Created by:** Zeynep KC
- **Date:** 2026-04-23

---

## TC-001
- **Title:** Successful order placement
- **Preconditions:**
    - User is logged in
    - User has products in cart
    - User is on the Cart page
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Add a product to cart
    3. Navigate to Cart page
    4. Click "Place Order" button
    5. Enter Name: Test User
    6. Enter Country: Turkey
    7. Enter City: Bursa
    8. Enter Credit Card: 1234567890123456
    9. Enter Month: 04
    10. Enter Year: 2026
    11. Click "Purchase" button
- **Expected Result:** Purchase confirmation message should be displayed
- **Priority:** High
- **Status:** Not Executed

---

## TC-002
- **Title:** Place order with empty form
- **Preconditions:**
    - User is logged in
    - User has products in cart
    - User is on the Cart page
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Add a product to cart
    3. Navigate to Cart page
    4. Click "Place Order" button
    5. Leave all required fields empty
    6. Click "Purchase" button
- **Expected Result:** Warning message should be displayed for empty fields
- **Priority:** High
- **Status:** Not Executed
- **Note:** Known bug — empty form may be accepted

---

## TC-003
- **Title:** Place order with invalid credit card (letters)
- **Preconditions:**
    - User is logged in
    - User has products in cart
    - User is on the Cart page
- **Steps:**
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
- **Priority:** High
- **Status:** Not Executed
- **Note:** Known bug — system accepts letters in credit card field

---

## TC-004
- **Title:** Place order with short credit card number
- **Preconditions:**
    - User is logged in
    - User has products in cart
    - User is on the Cart page
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Add a product to cart
    3. Navigate to Cart page
    4. Click "Place Order" button
    5. Enter Name: Test User
    6. Enter Country: Turkey
    7. Enter City: Bursa
    8. Enter Credit Card: 1234
    9. Enter Month: 04
    10. Enter Year: 2026
    11. Click "Purchase" button
- **Expected Result:** Invalid credit card warning should be displayed
- **Priority:** High
- **Status:** Not Executed
- **Note:** Known bug — system accepts any length credit card number

---

## TC-005
- **Title:** Place order with only Name filled
- **Preconditions:**
    - User is logged in
    - User has products in cart
    - User is on the Cart page
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Add a product to cart
    3. Navigate to Cart page
    4. Click "Place Order" button
    5. Enter Name: Test User
    6. Leave all other fields empty
    7. Click "Purchase" button
- **Expected Result:** Warning should be displayed — credit card field is required
- **Priority:** High
- **Status:** Not Executed

---

## TC-006
- **Title:** Place order with missing credit card
- **Preconditions:**
    - User is logged in
    - User has products in cart
    - User is on the Cart page
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Add a product to cart
    3. Navigate to Cart page
    4. Click "Place Order" button
    5. Enter Name: Test User
    6. Enter Country: Turkey
    7. Enter City: Bursa
    8. Leave Credit Card field empty
    9. Enter Month: 04
    10. Enter Year: 2026
    11. Click "Purchase" button
- **Expected Result:** Warning should be displayed — credit card information is required
- **Priority:** High
- **Status:** Not Executed

---

## TC-007
- **Title:** Verify order total in Place Order modal
- **Preconditions:**
    - User is logged in
    - User has products in cart
    - User is on the Cart page
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Add a product to cart
    3. Navigate to Cart page
    4. Click "Place Order" button
    5. Observe order total in Place Order modal
- **Expected Result:** Order total in modal should match the cart total
- **Priority:** Medium
- **Status:** Not Executed

---

## TC-008
- **Title:** Close Place Order modal without purchasing
- **Preconditions:**
    - User is logged in
    - User has products in cart
    - User is on the Cart page
- **Steps:**
    1. Navigate to https://www.demoblaze.com
    2. Add a product to cart
    3. Navigate to Cart page
    4. Click "Place Order" button
    5. Click "Close" button on Place Order modal
    6. Observe the cart
- **Expected Result:** Modal should be closed and cart contents should remain unchanged
- **Priority:** Medium
- **Status:** Not Executed