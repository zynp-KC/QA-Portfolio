# Restful-Booker API Automation Framework

![Playwright Tests](https://github.com/zynp-KC/QA-Portfolio/actions/workflows/playwright.yml/badge.svg)

A code-based API test automation framework for the [Restful-Booker](https://restful-booker.herokuapp.com/) API, built with Playwright's `request` API and TypeScript. It covers the full booking lifecycle (CRUD), dynamic token authentication, and both positive and negative scenarios — including documented API defects uncovered through negative testing.

## Tech Stack

| Tool | Purpose |
| --- | --- |
| **Playwright** (`@playwright/test`) | Test runner, assertions, and HTTP `request` client (API-only, no browser) |
| **TypeScript** | Type-safe payloads and responses (`strict` mode) |
| **GitHub Actions** | CI pipeline — tests run on every push via a matrix job |

This framework deliberately runs **API-only** — no browser binaries are installed (`npx playwright install` is skipped), keeping CI fast and the dependency footprint small. Playwright was chosen over standalone API tools (REST Assured, Supertest) to stay consistent with the existing portfolio stack and reuse the same CI infrastructure.

## Architecture

```
api-automation-restful-booker/
├── src/
│   ├── client/
│   │   └── api-client.ts        # ApiClient wrapper: token + CRUD methods (DRY)
│   └── models/
│       └── booking.ts           # Typed payload/response interfaces
├── tests/
│   ├── health.api.spec.ts       # /ping health check
│   ├── auth.api.spec.ts         # token retrieval + invalid credentials
│   ├── booking-crud.api.spec.ts # full create → read → update → delete lifecycle
│   └── booking-negative.api.spec.ts  # invalid ID, unauthorized delete, missing fields
├── playwright.api.config.ts     # baseURL, reporters, CI-aware retries
├── tsconfig.json
└── package.json
```

### Design Decisions

- **API client wrapper (`ApiClient`).** All HTTP calls, the base URL, shared headers, and token handling live in one class. Tests express intent (`client.createBooking(...)`) instead of repeating raw requests — the API-layer equivalent of the Page Object Model.
- **Dependency injection.** The Playwright `request` context is passed into `ApiClient` via its constructor, keeping the client decoupled and testable.
- **Typed models.** Request (`Booking`) and response (`BookingResponse`) shapes are separate interfaces, so the code reflects that what you send is not what you get back. `additionalneeds` is modelled as optional (`?`) to match the real API.
- **Dynamic authentication.** The auth token is fetched at runtime from `/auth` and passed into protected requests — no hard-coded or stale credentials.
- **Single-test CRUD lifecycle.** The full create→read→update→delete flow runs inside one test using `test.step()`, so state (`bookingId`) stays isolated within the test rather than leaking across dependent tests.
- **CI-aware retries.** Retries are set to `2` in CI and `0` locally. This tolerates Heroku cold-starts on the public API without masking real flakiness — locally a failure surfaces immediately.
- **Serial execution.** `workers: 1` and `fullyParallel: false` prevent shared-state collisions against the single public API instance.

## Test Coverage

The suite follows a layered approach, from simple smoke checks up to full lifecycle and edge cases.

| Area | Scenario | Type |
| --- | --- | --- |
| Health | `GET /ping` returns 201 | Smoke |
| Auth | Valid credentials return a token | Positive |
| Auth | Invalid credentials return no token | Negative |
| Booking | Full CRUD lifecycle (create → read → update → delete) | Positive |
| Booking | `GET` with a non-existent ID returns 404 | Negative |
| Booking | `DELETE` without a token is rejected (403) | Negative / Security |
| Booking | `POST` with missing required fields | Negative / Validation |

## Known Bugs Caught

Negative testing surfaced three deviations from correct REST behaviour. Each test asserts the **actual** behaviour and documents the expected one in a comment, so the suite both passes today and flags any future change.

| Endpoint | Expected | Actual | Note |
| --- | --- | --- | --- |
| `GET /ping` | 200 / 204 | **201** | Health check returns `201 Created`, though it creates nothing |
| `POST /auth` (bad credentials) | 401 Unauthorized | **200 OK** | Returns `200` with `reason: "Bad credentials"` and no token — status code misleads, but no token leaks |
| `POST /booking` (missing fields) | 400 Bad Request | **500 Internal Server Error** | The API crashes on missing required fields instead of validating input |

## Getting Started

### Prerequisites

- Node.js 18+ (CI runs on Node 22)

### Installation

```bash
npm install
```

> Browser binaries are intentionally **not** installed — this is an API-only project.

### Running Tests

```bash
# Run the full suite
npm test

# Type-check only (no tests)
npm run typecheck
```

The HTML report is generated in CI and uploaded as an artifact. Locally, results print to the terminal.

## CI/CD

Tests run on GitHub Actions on every push and pull request to `main`. This project is one job in a shared matrix workflow (`.github/workflows/playwright.yml`) at the repository root, alongside other portfolio projects. Each job runs in its own isolated environment, so a failure in one does not affect the others.

The badge at the top of this README reflects the live status of the entire workflow.

>!-- CI path-filter test -->
