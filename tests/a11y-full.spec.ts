/**
 * Full accessibility matrix test — Playwright + axe-core
 *
 * Covers every page of the site across light and dark color schemes.
 * The project (desktop / mobile) is selected at the Playwright level via
 * `--project`; the color scheme is controlled here via the A11Y_THEME
 * environment variable so that CI can run all four combinations in a matrix.
 *
 * Usage:
 *   A11Y_THEME=light  npx playwright test --project=desktop
 *   A11Y_THEME=dark   npx playwright test --project=desktop
 *   A11Y_THEME=light  npx playwright test --project=mobile
 *   A11Y_THEME=dark   npx playwright test --project=mobile
 *
 * Local quick-check (desktop, light):
 *   BASE_URL=http://localhost:4000 npx playwright test --project=desktop
 */

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const THEME = (process.env.A11Y_THEME || 'light') as 'light' | 'dark';

const PAGES = [
  '/',
  '/domains/',
  '/domains/data-centers/full-model/',
  '/domains/accessibility/full-model/',
  '/domains/ai-adoption/full-model/',
  '/domains/algorithmic-accountability/full-model/',
  '/domains/open-source-in-government/full-model/',
  '/domains/web-sustainability/full-model/',
  '/domains/digital-sovereignty/full-model/',
  '/domains/smart-cities/full-model/',
  '/domains/children-technology/full-model/',
  '/domains/freedom-of-expression/full-model/',
  '/domains/digital-public-infrastructure/full-model/',
  '/about/',
  '/adoptions/',
  '/search/',
  '/tools/',
  '/tools/advocate/',
  '/tools/policy-pro/',
];

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Format axe violations into a readable string for test failure messages.
 */
function formatViolations(violations: Awaited<ReturnType<AxeBuilder['analyze']>>['violations']): string {
  if (violations.length === 0) return '';
  return violations
    .map(v => {
      const nodeList = v.nodes
        .slice(0, 3)
        .map(n => `    • ${n.html}`)
        .join('\n');
      return `[${v.impact?.toUpperCase()}] ${v.id}: ${v.description}\n${nodeList}`;
    })
    .join('\n\n');
}

// ---------------------------------------------------------------------------
// Tests — one test per page, loop defined at module level so Playwright
// can report each page as a distinct test case.
// ---------------------------------------------------------------------------

for (const path of PAGES) {
  test(`${THEME} | ${path}`, async ({ page, isMobile }) => {
    // Use Playwright's emulateMedia — more reliable than --force-dark-mode
    // because it targets the prefers-color-scheme media query directly.
    await page.emulateMedia({ colorScheme: THEME });

    await page.goto(path, { waitUntil: 'networkidle' });

    // If mobile, open the nav menu so axe can also audit it in its open state.
    // The site uses #nav-toggle (see _includes/nav.html).
    const navToggle = page.locator('#nav-toggle');
    if (isMobile && await navToggle.isVisible()) {
      await navToggle.click();
      // Give the menu animation a moment to settle.
      await page.waitForTimeout(300);
    }

    const results = await new AxeBuilder({ page })
      .withTags(WCAG_TAGS)
      .analyze();

    const message = results.violations.length > 0
      ? `\n\nAxe found ${results.violations.length} violation(s) on ${path} [${THEME}]:\n\n${formatViolations(results.violations)}`
      : '';

    expect(results.violations, message).toEqual([]);
  });
}
