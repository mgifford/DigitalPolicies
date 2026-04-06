import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for accessibility testing.
 *
 * Two projects — desktop and mobile — are defined here.
 * Theme (light/dark) is controlled at test runtime via the A11Y_THEME
 * environment variable so that CI can run all four combinations without
 * needing separate config files.
 *
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  // Each test file gets its own timeout; accessibility scans can be slow.
  timeout: 60_000,
  // Never silently retry — a failure is a failure.
  retries: 0,
  // Run tests serially within each project to keep output readable.
  workers: 1,

  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:4001',
    // Capture screenshot and trace on failure for debugging.
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  reporter: [
    ['list'],
    // JSON output consumed by CI upload-artifact and AI tooling.
    ['json', { outputFile: 'playwright-results/results.json' }],
  ],

  projects: [
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        // 1440×900 — standard laptop viewport used across team tooling.
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: 'mobile',
      use: {
        // Full device emulation: viewport, user-agent, touch events, device pixel ratio.
        ...devices['Pixel 5'],
      },
    },
  ],
});
