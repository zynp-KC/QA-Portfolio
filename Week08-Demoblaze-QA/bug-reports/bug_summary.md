# Bug Report Summary — Demoblaze E-Commerce

- **Date:** 2026-04-23
- **Tester:** Zeynep KC
- **Environment:** https://www.demoblaze.com

---

## Bug List

| ID | Module | Summary | Severity | Priority | Status |
|---|---|---|---|---|---|
| BUG-01 | Product Catalog | Previous button is active on first page — changes product order | Medium | P2 | Open |
| BUG-02 | Cart / Checkout | Guest user can add to cart and complete checkout without login | High | P1 | Open |
| BUG-03 | Checkout | Credit card field accepts letters — order completed without validation | High | P1 | Open |
| BUG-04 | Checkout | Credit card field accepts short numbers — order completed without validation | High | P1 | Open |
| BUG-05 | Cart | Same product can be added to cart unlimited times | Medium | P2 | Open |
| BUG-06 | Cart | Product name not clickable from cart page | Low | P3 | Open |
| BUG-07 | Contact | Empty contact form submission accepted — no validation | Medium | P2 | Open |
| BUG-08 | Contact | Form data persists after closing modal | Low | P3 | Open |
| BUG-09 | Authentication | Login intermittently fails — no server response, no user feedback (~13%) | High | P1 | Open |

---

## Summary Statistics

| Severity | Count |
|---|---|
| High | 4 |
| Medium | 3 |
| Low | 2 |
| **Total** | **9** |

---

## Evidence

| Bug ID | Screenshot |
|---|---|
| BUG-01 | screenshots/bug-01-previous-button.png |
| BUG-02 | Not available |
| BUG-03 | Not available |
| BUG-04 | Not available |
| BUG-05 | screenshots/bug-05-unlimited-add-to-cart.png |
| BUG-06 | Not available |
| BUG-07 | screenshots/bug-07-empty-contact-form.png |
| BUG-08 | Not available |
| BUG-09 | Not available — network response logs (13/15 runs returned a token, 2 returned no response) |