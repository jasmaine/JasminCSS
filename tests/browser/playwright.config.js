/**
 * Playwright Configuration for JasminCSS Browser Testing
 * @see https://playwright.dev/docs/test-configuration
 */

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './',
  testMatch: '**/*.spec.js',

  // Maximum time one test can run
  timeout: 30000,

  // Run tests in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: [
    ['html', { outputFolder: '../../reports/browser' }],
    ['list']
  ],

  // Shared settings for all the projects below
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: 'http://localhost:3000',

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',

    // Screenshot on failure
    screenshot: 'only-on-failure',
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        viewport: { width: 1280, height: 720 },
      },
    },

    // Mobile viewports
    {
      name: 'mobile-chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 375, height: 667 },
        isMobile: true,
      },
    },
    {
      name: 'mobile-safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 375, height: 667 },
        isMobile: true,
      },
    },

    // Tablet viewport
    {
      name: 'tablet',
      use: {
        browserName: 'chromium',
        viewport: { width: 768, height: 1024 },
      },
    },
  ],

  // Run local dev server before starting the tests
  webServer: {
    command: 'npx serve ../../ -l 3000',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
};

module.exports = config;
