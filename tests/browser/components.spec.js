/**
 * JasminCSS Component Browser Tests
 * Tests interactive components across browsers
 */

const { test, expect } = require('@playwright/test');

test.describe('Dropdown Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/dashboard/index.html');
  });

  test('opens on click', async ({ page }) => {
    const dropdown = page.locator('[data-dropdown]').first();
    const toggle = dropdown.locator('.dropdown-toggle');
    const menu = dropdown.locator('.dropdown-menu');

    // Initially closed
    await expect(menu).not.toBeVisible();

    // Click to open
    await toggle.click();
    await expect(menu).toBeVisible();
  });

  test('closes on outside click', async ({ page }) => {
    const dropdown = page.locator('[data-dropdown]').first();
    const toggle = dropdown.locator('.dropdown-toggle');
    const menu = dropdown.locator('.dropdown-menu');

    await toggle.click();
    await expect(menu).toBeVisible();

    // Click outside
    await page.click('body');
    await expect(menu).not.toBeVisible();
  });

  test('closes on Escape key', async ({ page }) => {
    const dropdown = page.locator('[data-dropdown]').first();
    const toggle = dropdown.locator('.dropdown-toggle');
    const menu = dropdown.locator('.dropdown-menu');

    await toggle.click();
    await expect(menu).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(menu).not.toBeVisible();
  });

  test('supports keyboard navigation', async ({ page }) => {
    const dropdown = page.locator('[data-dropdown]').first();
    const toggle = dropdown.locator('.dropdown-toggle');

    await toggle.click();

    // Navigate with arrow keys
    await page.keyboard.press('ArrowDown');
    const firstItem = dropdown.locator('.dropdown-item').first();
    await expect(firstItem).toBeFocused();

    await page.keyboard.press('ArrowDown');
    const secondItem = dropdown.locator('.dropdown-item').nth(1);
    await expect(secondItem).toBeFocused();
  });
});

test.describe('Modal Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/landing/index.html');
  });

  test('opens when trigger is clicked', async ({ page }) => {
    // Add a test modal to the page
    await page.evaluate(() => {
      document.body.insertAdjacentHTML('beforeend', `
        <button id="test-trigger" data-modal-target="#test-modal">Open Modal</button>
        <div class="modal" data-modal id="test-modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Test Modal</h5>
                <button class="modal-close" data-modal-close>&times;</button>
              </div>
              <div class="modal-body">Test content</div>
            </div>
          </div>
        </div>
      `);
      // Re-init components
      if (window.Jasmin) window.Jasmin.initAll();
    });

    const modal = page.locator('#test-modal');
    await expect(modal).not.toBeVisible();

    await page.click('#test-trigger');
    await expect(modal).toBeVisible();
  });

  test('closes on close button click', async ({ page }) => {
    await page.evaluate(() => {
      document.body.insertAdjacentHTML('beforeend', `
        <div class="modal active" data-modal id="close-test-modal" style="display: flex;">
          <div class="modal-dialog">
            <div class="modal-content">
              <button id="close-btn" class="modal-close" data-modal-close>&times;</button>
              <div class="modal-body">Test content</div>
            </div>
          </div>
        </div>
      `);
      if (window.Jasmin) window.Jasmin.initAll();
    });

    const modal = page.locator('#close-test-modal');
    await page.click('#close-btn');

    // Modal should be hidden after close
    await expect(modal).not.toBeVisible();
  });
});

test.describe('Accordion Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/landing/index.html');
  });

  test('expands panel on click', async ({ page }) => {
    const accordion = page.locator('[data-accordion]').first();
    const trigger = accordion.locator('.accordion-trigger').first();
    const content = accordion.locator('.accordion-content').first();

    await trigger.click();
    await expect(content).toBeVisible();
  });

  test('collapses other panels by default', async ({ page }) => {
    const accordion = page.locator('[data-accordion]').first();
    const triggers = accordion.locator('.accordion-trigger');
    const contents = accordion.locator('.accordion-content');

    // Open first panel
    await triggers.first().click();
    await expect(contents.first()).toBeVisible();

    // Open second panel - first should close
    await triggers.nth(1).click();
    await expect(contents.nth(1)).toBeVisible();
    // First panel should now be closed
    await expect(contents.first()).not.toBeVisible();
  });
});

test.describe('Offcanvas Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/landing/index.html');
    // Resize to mobile to show mobile menu button
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('opens from trigger', async ({ page }) => {
    const trigger = page.locator('[data-offcanvas-target]').first();
    const offcanvas = page.locator('#mobile-menu');

    await expect(offcanvas).not.toBeVisible();
    await trigger.click();
    await expect(offcanvas).toBeVisible();
  });

  test('closes on close button', async ({ page }) => {
    const trigger = page.locator('[data-offcanvas-target]').first();
    const offcanvas = page.locator('#mobile-menu');
    const closeBtn = offcanvas.locator('[data-offcanvas-close]');

    await trigger.click();
    await expect(offcanvas).toBeVisible();

    await closeBtn.click();
    await expect(offcanvas).not.toBeVisible();
  });
});

test.describe('Tabs Component', () => {
  test('switches tabs on click', async ({ page }) => {
    await page.evaluate(() => {
      document.body.insertAdjacentHTML('beforeend', `
        <div data-tabs id="test-tabs">
          <div class="tabs-list" role="tablist">
            <button class="tab active" data-tab="0">Tab 1</button>
            <button class="tab" data-tab="1">Tab 2</button>
          </div>
          <div class="tab-panel active" data-tab-panel="0">Content 1</div>
          <div class="tab-panel" data-tab-panel="1">Content 2</div>
        </div>
      `);
      if (window.Jasmin) window.Jasmin.initAll();
    });

    const tab2 = page.locator('[data-tab="1"]');
    const panel1 = page.locator('[data-tab-panel="0"]');
    const panel2 = page.locator('[data-tab-panel="1"]');

    await expect(panel1).toBeVisible();
    await expect(panel2).not.toBeVisible();

    await tab2.click();

    await expect(panel1).not.toBeVisible();
    await expect(panel2).toBeVisible();
  });
});
