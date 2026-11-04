const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');

test('user can open sign in page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
});
