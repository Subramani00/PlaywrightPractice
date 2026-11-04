const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pages/HomePage');

test('homepage loads successfully', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.waitForPageLoad();
  await homePage.verifyPageTitle('PlayStation');

  await expect(homePage.logo).toBeVisible();
});
