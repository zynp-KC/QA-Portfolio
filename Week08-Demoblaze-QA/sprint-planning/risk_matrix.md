# Risk Matrix — Demoblaze E-Commerce

**Project:** Demoblaze E-Commerce
**Date:** 2026-04-21
**Prepared by:** Zeynep KC

---

## Risk Assessment

| # | Risk | Likelihood | Impact | Priority |
|---|---|---|---|---|
| R-01 | Add to cart fails | Medium | High | P1 |
| R-02 | Place order fails | High | High | P1 |
| R-03 | User registration fails | Medium | High | P1 |
| R-04 | Login fails for registered users | Medium | High | P1 |
| R-05 | Cart total price calculated incorrectly | Medium | High | P1 |
| R-06 | Order placed without required fields | High | High | P1 |
| R-07 | Product list fails to load | Low | High | P2 |
| R-08 | Category filter returns wrong products | Medium | Medium | P2 |
| R-09 | Contact form sends without validation | High | Medium | P2 |
| R-10 | Cross-browser UI inconsistencies | High | Low | P3 |

---

## Mitigation Strategies

| Risk | Mitigation |
|---|---|
| R-01 | E2E cart flow automation |
| R-02 | API + E2E test priority |
| R-03 | Negative signup tests |
| R-04 | Negative login tests |
| R-05 | Cart total validation tests |
| R-06 | Negative test: empty required fields |
| R-07 | Smoke test on product list load |
| R-08 | Category filter API validation |
| R-09 | Contact form boundary testing |
| R-10 | Playwright cross-browser matrix |

---

## Risk Scoring Guide

| Likelihood | Impact | Priority |
|---|---|---|
| High + High | → | P1 |
| Medium + High | → | P1 |
| Medium + Medium | → | P2 |
| High + Medium | → | P2 |
| Low + Any | → | P3 |
| Any + Low | → | P3 |