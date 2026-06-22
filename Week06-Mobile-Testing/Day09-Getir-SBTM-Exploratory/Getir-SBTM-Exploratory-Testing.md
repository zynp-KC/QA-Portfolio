# Getir — Session-Based Exploratory Testing (SBTM)
 
A charter-driven, **timeboxed** exploratory session on a production mobile app —
contrasting with the comparison-style exploratory reports elsewhere in this week
(Spotify, FaceLab, ToonApp).
 
| Field | Detail |
|---|---|
| Application | Getir (getirmarket) |
| Test Area | Shopping flow — Search, Basket, Checkout |
| Platform | iOS 26.4.2 / iPhone 13 |
| App Version | Getir v26.9.0 |
| Session Length | 60 minutes (timeboxed) |
| Date | 2026-05-13 |
| Tester | Zeynep Kapacak |
| Context | Produced during TesterYou QA Bootcamp 2026 — Session 6 |
 
---
 
## Test Charter
 
| | |
|---|---|
| **What to explore** | Getir's getirmarket shopping flow: product search, add-to-basket, and the checkout process. |
| **Why / Mission** | Discover UX issues, unexpected behaviors, and potential bugs a user hits while shopping for groceries. |
| **What to watch** | Search behavior, basket management, checkout flow, error messaging, and edge-case scenarios. |
 
---
 
## Session Notes (Timeboxed Log)
 
| Time | Observation |
|---|---|
| **0–5 min** | App launched, getirmarket selected. Two delivery options visible: Getir (10–15 min) and Getir More (30–50 min). |
| **5–15 min** | Searched `Simit` → 3 relevant products listed. **No address selected** — tapping `+` raised "Please select an address". Tapping **Cancel** left the `+` button **permanently stuck in loading**. **Bug found (GETIR-001).** Same failure reproduced on the product-detail **Add to basket** button. |
| **15–25 min** | Added an address → product added to basket successfully. Basket management (increase, decrease, remove) all worked. Discovered the quick-search feature. |
| **25–40 min** | Moved to checkout. Tested the order-note field — tapping **Saved Notes** spun the Getir logo for ~10s with **no close button**. Contactless delivery and "Don't ring the bell" worked correctly. |
| **40–50 min** | Tested My Shopping List. `ygrt` correctly resolved to yogurt. `lm` returned **no guidance message** at all. |
| **50–60 min** | Tried to add 12×500ml water → hit a category weight-limit error that was **never disclosed beforehand**. Selected Getir More → "This warehouse is temporarily out of service" with **no estimated time**. |
 
---
 
## Findings Summary
 
| ID | Title | Type | Severity | Priority |
|---|---|---|---|---|
| **BULGU-001** | Button stuck in loading state after Cancel (no address) | Functional | High | P1 |
| BULGU-002 | Order-note save: 10s delay with no close/cancel button | UX / Performance | Medium | P2 |
| BULGU-003 | Getir More closed — no estimated reopening time shown | UX / Information | Medium | P3 |
| BULGU-004 | Category weight limit not disclosed in advance | UX / Information | Medium | P3 |
| BULGU-005 | My Shopping List: no guidance for unrecognized input | UX | Low | P4 |
 
> Full report for the flagship functional bug:
> [`bug-reports/GETIR-001-button-stuck-loading-state.md`](./bug-reports/GETIR-001-button-stuck-loading-state.md)
 
---
 
## Debrief / Evaluation
 
The getirmarket interface is broadly user-friendly; basket management and checkout
options worked reliably. The most serious issue is the **UI state bug (BULGU-001)**:
after the address-validation alert is cancelled, the add-to-basket controls never return
to idle, dead-ending the core purchase flow until the user leaves the screen.
 
The remaining findings cluster around **missing or delayed feedback**: an unbounded,
uncancellable 10-second spinner on the order-note save; a service-closed message with no
reopening estimate; an undisclosed category weight limit surfaced only on failure; and
silent handling of unrecognized shopping-list input. Individually minor, together they
point to a recurring gap in **proactive user feedback and post-error UI recovery**.
 
---
 
## Methodology Notes
 
- **Charter-driven:** a single, explicit mission scoped the session before testing began.
- **Timeboxed:** a fixed 60-minute box, logged in ~10-minute increments, to keep the
  session focused and auditable.
- **Reactive depth:** when GETIR-001 surfaced, the session paused to confirm the same
  failure on a second control (product-detail) before moving on — establishing the
  systemic nature of the defect rather than logging a one-off.
---
 
*Raw deliverable (with embedded screenshots):* `Exploratory_Testing_ZeynepKapacak.pdf`
