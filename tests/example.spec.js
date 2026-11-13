const { test, expect } = require('@playwright/test');

test('User Registration Form automation', async ({ page }) => {
  const formUrl = 'file:///C:/Users/Manohar/Downloads/playwright_practice_form.html';

  await page.goto(formUrl);

  await expect(page).toHaveTitle(/User Registration Form - Playwright Practice/i);
  await expect(page.locator('h1')).toHaveText('User Registration Form');

  const firstName = 'John';
  const lastName = 'Doe';
  const gender = 'Male';

  await page.locator('#firstName').fill(firstName);
  await page.locator('#lastName').fill(lastName);
  await page.locator(`input[name="gender"][value="${gender}"]`).check();

  const today = new Date();
  const date25YearsAgo = new Date(today.getFullYear() - 25, today.getMonth(), today.getDate());

  const formatLocalDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const dob = formatLocalDate(date25YearsAgo);

  await page.locator('#date').fill(dob);
  await page.locator('button[type="submit"]').click();

  await expect(page.locator('#success-message')).toBeVisible();
  await expect(page.locator('#success-message')).toHaveText(/Form submitted successfully/i);

  await expect(page.locator('[data-testid="submitted-first-name"]')).toHaveText(firstName);
  await expect(page.locator('[data-testid="submitted-last-name"]')).toHaveText(lastName);
  await expect(page.locator('[data-testid="submitted-gender"]')).toHaveText(gender);
  await expect(page.locator('[data-testid="submitted-date"]')).toHaveText(
    `${String(date25YearsAgo.getDate()).padStart(2, '0')}-${String(date25YearsAgo.getMonth() + 1).padStart(2, '0')}-${date25YearsAgo.getFullYear()}`
  );

  await expect(page.locator('h2')).toHaveText('Submitted Details');


  
});
