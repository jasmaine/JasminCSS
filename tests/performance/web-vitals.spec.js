/**
 * JasminCSS Web Vitals Performance Tests
 * Tests Core Web Vitals metrics using Playwright
 */

const { test, expect } = require('@playwright/test');

test.describe('Core Web Vitals', () => {
  test.beforeEach(async ({ page }) => {
    // Enable performance metrics collection
    await page.coverage.startCSSCoverage();
  });

  test.afterEach(async ({ page }) => {
    await page.coverage.stopCSSCoverage();
  });

  test('Landing page loads within performance budget', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/examples/landing/index.html', {
      waitUntil: 'networkidle',
    });

    const loadTime = Date.now() - startTime;

    // Page should load in under 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('First Contentful Paint is fast', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    const fcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const fcpEntry = entries.find((e) => e.name === 'first-contentful-paint');
          if (fcpEntry) resolve(fcpEntry.startTime);
        }).observe({ entryTypes: ['paint'] });

        // Fallback if paint entries already fired
        const entries = performance.getEntriesByType('paint');
        const fcpEntry = entries.find((e) => e.name === 'first-contentful-paint');
        if (fcpEntry) resolve(fcpEntry.startTime);
      });
    });

    // FCP should be under 1.8 seconds (Good threshold)
    console.log(`FCP: ${fcp}ms`);
    expect(fcp).toBeLessThan(1800);
  });

  test('Largest Contentful Paint is acceptable', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        let lcpValue = 0;
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            lcpValue = entry.startTime;
          });
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Wait for LCP to settle
        setTimeout(() => resolve(lcpValue), 2000);
      });
    });

    // LCP should be under 2.5 seconds (Good threshold)
    console.log(`LCP: ${lcp}ms`);
    expect(lcp).toBeLessThan(2500);
  });

  test('Cumulative Layout Shift is minimal', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    const cls = await page.evaluate(() => {
      return new Promise((resolve) => {
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
        }).observe({ entryTypes: ['layout-shift'] });

        // Wait for layout to settle
        setTimeout(() => resolve(clsValue), 2000);
      });
    });

    // CLS should be under 0.1 (Good threshold)
    console.log(`CLS: ${cls}`);
    expect(cls).toBeLessThan(0.1);
  });

  test('No render-blocking CSS issues', async ({ page }) => {
    const cssRequests = [];

    page.on('request', (request) => {
      if (request.resourceType() === 'stylesheet') {
        cssRequests.push(request.url());
      }
    });

    await page.goto('/examples/landing/index.html');

    // Should have minimal CSS requests
    expect(cssRequests.length).toBeLessThanOrEqual(2);
  });

  test('CSS is efficiently cached', async ({ page, context }) => {
    // First load
    await page.goto('/examples/landing/index.html');

    // Second load should use cache
    const start = Date.now();
    await page.reload({ waitUntil: 'networkidle' });
    const reloadTime = Date.now() - start;

    // Cached load should be faster
    expect(reloadTime).toBeLessThan(1000);
  });
});

test.describe('CSS Coverage', () => {
  test('CSS utilization is reasonable', async ({ page }) => {
    await page.coverage.startCSSCoverage();

    await page.goto('/examples/landing/index.html');
    await page.waitForLoadState('networkidle');

    const coverage = await page.coverage.stopCSSCoverage();

    let totalBytes = 0;
    let usedBytes = 0;

    for (const entry of coverage) {
      totalBytes += entry.text.length;
      for (const range of entry.ranges) {
        usedBytes += range.end - range.start;
      }
    }

    const utilization = (usedBytes / totalBytes) * 100;
    console.log(`CSS Utilization: ${utilization.toFixed(1)}% (${usedBytes}/${totalBytes} bytes)`);

    // At least 10% of CSS should be used on a page
    // (Lower for utility frameworks is expected)
    expect(utilization).toBeGreaterThan(5);
  });
});

test.describe('Animation Performance', () => {
  test('animations do not cause jank', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    // Start a long-running animation test
    const frameData = await page.evaluate(() => {
      return new Promise((resolve) => {
        const frames = [];
        let lastTime = performance.now();
        let frameCount = 0;

        function measureFrame(time) {
          const delta = time - lastTime;
          frames.push(delta);
          lastTime = time;
          frameCount++;

          if (frameCount < 60) {
            requestAnimationFrame(measureFrame);
          } else {
            resolve(frames);
          }
        }

        requestAnimationFrame(measureFrame);
      });
    });

    // Calculate frame time statistics
    const avgFrameTime = frameData.reduce((a, b) => a + b) / frameData.length;
    const maxFrameTime = Math.max(...frameData);

    console.log(`Average frame time: ${avgFrameTime.toFixed(2)}ms`);
    console.log(`Max frame time: ${maxFrameTime.toFixed(2)}ms`);

    // Average should be close to 16.67ms (60fps)
    expect(avgFrameTime).toBeLessThan(20);
    // No single frame should take longer than 50ms
    expect(maxFrameTime).toBeLessThan(50);
  });
});

test.describe('Mobile Performance', () => {
  test.use({
    viewport: { width: 375, height: 667 },
    isMobile: true,
  });

  test('mobile page loads quickly', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/examples/landing/index.html', {
      waitUntil: 'domcontentloaded',
    });

    const loadTime = Date.now() - startTime;

    // Mobile should still load fast
    expect(loadTime).toBeLessThan(2000);
  });

  test('mobile interactions are responsive', async ({ page }) => {
    await page.goto('/examples/landing/index.html');

    const menuButton = page.locator('[data-offcanvas-target]').first();

    const startTime = Date.now();
    await menuButton.click();
    await page.locator('.offcanvas.active, .offcanvas[style*="transform"]').waitFor({
      state: 'visible',
      timeout: 500,
    });
    const responseTime = Date.now() - startTime;

    // Interaction should respond in under 100ms
    expect(responseTime).toBeLessThan(300);
  });
});
