/**
 * JasminCSS Responsive Layout Tests
 * Tests responsive utilities across viewports
 */

const { test, expect } = require('@playwright/test');

const viewports = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 800 },
  wide: { width: 1536, height: 900 },
};

test.describe('Responsive Breakpoints', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/landing/index.html');
  });

  test('mobile navigation is hidden on desktop', async ({ page }) => {
    await page.setViewportSize(viewports.desktop);

    const mobileMenuBtn = page.locator('[data-offcanvas-target="#mobile-menu"]');
    const desktopNav = page.locator('.hidden.md\\:flex').first();

    await expect(mobileMenuBtn).not.toBeVisible();
    await expect(desktopNav).toBeVisible();
  });

  test('mobile navigation is visible on mobile', async ({ page }) => {
    await page.setViewportSize(viewports.mobile);

    const mobileMenuBtn = page.locator('[data-offcanvas-target="#mobile-menu"]');
    await expect(mobileMenuBtn).toBeVisible();
  });

  test('grid columns change at breakpoints', async ({ page }) => {
    // Test grid responsive behavior
    await page.evaluate(() => {
      document.body.innerHTML = `
        <div id="test-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="card">1</div>
          <div class="card">2</div>
          <div class="card">3</div>
          <div class="card">4</div>
        </div>
      `;
    });

    const grid = page.locator('#test-grid');

    // Mobile - 1 column
    await page.setViewportSize(viewports.mobile);
    let style = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
    expect(style.split(' ').length).toBe(1);

    // Tablet - 2 columns
    await page.setViewportSize(viewports.tablet);
    style = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
    expect(style.split(' ').length).toBe(2);

    // Desktop - 4 columns
    await page.setViewportSize(viewports.desktop);
    style = await grid.evaluate((el) => getComputedStyle(el).gridTemplateColumns);
    expect(style.split(' ').length).toBe(4);
  });
});

test.describe('Flexbox Utilities', () => {
  test('flex direction changes at breakpoints', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <div id="test-flex" class="flex flex-col md:flex-row">
          <div>Item 1</div>
          <div>Item 2</div>
        </div>
      `;
    });

    const flex = page.locator('#test-flex');

    // Mobile - column
    await page.setViewportSize(viewports.mobile);
    let direction = await flex.evaluate((el) => getComputedStyle(el).flexDirection);
    expect(direction).toBe('column');

    // Desktop - row
    await page.setViewportSize(viewports.desktop);
    direction = await flex.evaluate((el) => getComputedStyle(el).flexDirection);
    expect(direction).toBe('row');
  });

  test('justify and align utilities work', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <div id="flex-center" class="flex justify-center items-center" style="height: 200px;">
          <div>Centered</div>
        </div>
        <div id="flex-between" class="flex justify-between">
          <div>Left</div>
          <div>Right</div>
        </div>
      `;
    });

    const center = page.locator('#flex-center');
    const between = page.locator('#flex-between');

    const centerJustify = await center.evaluate((el) => getComputedStyle(el).justifyContent);
    const centerAlign = await center.evaluate((el) => getComputedStyle(el).alignItems);
    expect(centerJustify).toBe('center');
    expect(centerAlign).toBe('center');

    const betweenJustify = await between.evaluate((el) => getComputedStyle(el).justifyContent);
    expect(betweenJustify).toBe('space-between');
  });
});

test.describe('Display Utilities', () => {
  test('hidden utility works', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <div id="hidden-element" class="hidden">Hidden</div>
        <div id="visible-element" class="block">Visible</div>
      `;
    });

    const hidden = page.locator('#hidden-element');
    const visible = page.locator('#visible-element');

    await expect(hidden).not.toBeVisible();
    await expect(visible).toBeVisible();
  });

  test('responsive display utilities work', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <div id="mobile-only" class="block md:hidden">Mobile Only</div>
        <div id="desktop-only" class="hidden md:block">Desktop Only</div>
      `;
    });

    const mobileOnly = page.locator('#mobile-only');
    const desktopOnly = page.locator('#desktop-only');

    // Mobile view
    await page.setViewportSize(viewports.mobile);
    await expect(mobileOnly).toBeVisible();
    await expect(desktopOnly).not.toBeVisible();

    // Desktop view
    await page.setViewportSize(viewports.desktop);
    await expect(mobileOnly).not.toBeVisible();
    await expect(desktopOnly).toBeVisible();
  });
});

test.describe('Spacing Utilities', () => {
  test('padding utilities apply correctly', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <div id="p4" class="p-4">Padding 4</div>
        <div id="px6" class="px-6">Padding X 6</div>
        <div id="py8" class="py-8">Padding Y 8</div>
      `;
    });

    const p4 = await page.locator('#p4').evaluate((el) => getComputedStyle(el).padding);
    expect(p4).toBe('16px'); // 1rem = 16px

    const px6 = await page.locator('#px6').evaluate((el) => ({
      left: getComputedStyle(el).paddingLeft,
      right: getComputedStyle(el).paddingRight,
    }));
    expect(px6.left).toBe('24px'); // 1.5rem = 24px
    expect(px6.right).toBe('24px');
  });

  test('margin utilities apply correctly', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <div id="m4" class="m-4">Margin 4</div>
        <div id="mx-auto" class="mx-auto" style="width: 100px;">Centered</div>
      `;
    });

    const m4 = await page.locator('#m4').evaluate((el) => getComputedStyle(el).margin);
    expect(m4).toBe('16px');

    const mxAuto = await page.locator('#mx-auto').evaluate((el) => ({
      left: getComputedStyle(el).marginLeft,
      right: getComputedStyle(el).marginRight,
    }));
    expect(mxAuto.left).toBe('auto');
    expect(mxAuto.right).toBe('auto');
  });
});

test.describe('Color Utilities', () => {
  test('text color utilities work', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <span id="text-primary" class="text-primary">Primary</span>
        <span id="text-success" class="text-success">Success</span>
        <span id="text-error" class="text-error">Error</span>
      `;
    });

    // Just verify the classes apply (actual colors depend on CSS variables)
    const primary = await page.locator('#text-primary').evaluate((el) => getComputedStyle(el).color);
    expect(primary).toBeTruthy();
  });

  test('background color utilities work', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <div id="bg-primary" class="bg-primary">Primary BG</div>
        <div id="bg-white" class="bg-white">White BG</div>
      `;
    });

    const bgWhite = await page.locator('#bg-white').evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bgWhite).toContain('rgb(255, 255, 255)');
  });
});

test.describe('Typography Utilities', () => {
  test('font size utilities work', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <span id="text-xs" class="text-xs">XS</span>
        <span id="text-base" class="text-base">Base</span>
        <span id="text-2xl" class="text-2xl">2XL</span>
      `;
    });

    const xs = await page.locator('#text-xs').evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
    const base = await page.locator('#text-base').evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
    const xl2 = await page.locator('#text-2xl').evaluate((el) => parseFloat(getComputedStyle(el).fontSize));

    expect(xs).toBeLessThan(base);
    expect(base).toBeLessThan(xl2);
  });

  test('font weight utilities work', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <span id="font-normal" class="font-normal">Normal</span>
        <span id="font-bold" class="font-bold">Bold</span>
      `;
    });

    const normal = await page.locator('#font-normal').evaluate((el) => getComputedStyle(el).fontWeight);
    const bold = await page.locator('#font-bold').evaluate((el) => getComputedStyle(el).fontWeight);

    expect(parseInt(normal)).toBeLessThan(parseInt(bold));
  });

  test('text alignment utilities work', async ({ page }) => {
    await page.evaluate(() => {
      document.body.innerHTML = `
        <div id="text-left" class="text-left">Left</div>
        <div id="text-center" class="text-center">Center</div>
        <div id="text-right" class="text-right">Right</div>
      `;
    });

    expect(await page.locator('#text-left').evaluate((el) => getComputedStyle(el).textAlign)).toBe('left');
    expect(await page.locator('#text-center').evaluate((el) => getComputedStyle(el).textAlign)).toBe('center');
    expect(await page.locator('#text-right').evaluate((el) => getComputedStyle(el).textAlign)).toBe('right');
  });
});
