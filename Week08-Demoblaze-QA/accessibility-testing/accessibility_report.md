# Accessibility Report — Demoblaze E-Commerce

- **Date:** 2026-04-25
- **Tester:** Zeynep KC
- **Tool:** axe-core via Playwright
- **Standard:** WCAG 2.1 AA
- **Pages Tested:** 4

---

## Summary

| Page | Violations | Critical | Serious |
|---|---|---|---|
| Home | 3 | 1 | 2 |
| Product Detail | 3 | 1 | 2 |
| Cart | 2 | 1 | 1 |
| Checkout Modal | 2 | 1 | 1 |
| **Total** | **10** | **4** | **5** |

---

## Violations Detail

### 1. image-alt — Images must have alternative text
- **Impact:** Critical
- **WCAG Rule:** WCAG 2.1 — 1.1.1 Non-text Content
- **Affected Pages:** All pages
- **Description:** `<img>` elements do not have `alt` attributes. Screen readers cannot describe images to visually impaired users.
- **Example:**
```html
<img width=\"50\" height=\"50\" style=\"margin-right:10px\" src=\"blazemeter-favicon-512x512.png\">
```
- **Fix:** Add descriptive `alt` attribute to all images.

---

### 2. color-contrast — Elements must meet minimum color contrast ratio
- **Impact:** Serious
- **WCAG Rule:** WCAG 2.1 — 1.4.3 Contrast Minimum
- **Affected Pages:** All pages
- **Description:** Foreground and background color contrast ratio does not meet the minimum 4.5:1 required by WCAG AA.
- **Examples:**
    - "Add to cart" button: contrast ratio 3.05 (expected 4.5:1)
    - "Delete" link: contrast ratio 4.13 (expected 4.5:1)
- **Fix:** Increase color contrast ratio to minimum 4.5:1.

---

### 3. link-name — Links must have discernible text
- **Impact:** Serious
- **WCAG Rule:** WCAG 2.1 — 2.4.4 Link Purpose
- **Affected Pages:** Home, Product Detail
- **Description:** Carousel navigation links do not have accessible text. Screen readers cannot determine link purpose.
- **Example:**
```html
<a class=\"left carousel-control\" href=\"#myCarousel-2\" data-slide=\"prev\"></a>
```
- **Fix:** Add `aria-label` attribute to carousel navigation links.

---

## Recommendations

| Priority | Fix | Impact |
|---|---|---|
| High | Add `alt` attributes to all images | Critical — affects screen reader users |
| High | Increase color contrast ratios | Serious — affects low vision users |
| Medium | Add `aria-label` to carousel links | Serious — affects keyboard navigation |