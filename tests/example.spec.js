import { test, expect } from '@playwright/test';

test('@smoke has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect the title to contain "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});

test('@regression get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the Get Started link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify the Installation heading is visible
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});
