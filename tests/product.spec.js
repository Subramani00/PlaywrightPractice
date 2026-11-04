const { test, expect } = require('@playwright/test');
const { ProductPage } = require('./pages/ProductPage');

test('product page can load', async ({ page }) => {
  const productPage = new ProductPage(page);

  await productPage.openProduct('/');
  await expect(page.locator('body')).toBeVisible();
});
