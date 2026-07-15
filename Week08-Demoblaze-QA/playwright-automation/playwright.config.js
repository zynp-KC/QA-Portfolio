import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Demoblaze has a single shared cart per account, and checkout clears it (BUG-11).
  // Parallel workers on the same account corrupt each other's cart state.
  fullyParallel: true,
  workers:1,

  forbidOnly: !!process.env.CI,

  // CI retries absorb Demoblaze's intermittent failures: silent login drops (BUG-09)
  // and the fire-and-forget checkout confirmation (BUG-10). Local stays at 0 so real
  // regressions surface immediately.
  retries: process.env.CI ? 2 : 0,

  reporter: 'html',
  expect: { timeout: 25000 },
  use: {
    baseURL: 'https://www.demoblaze.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 20000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});