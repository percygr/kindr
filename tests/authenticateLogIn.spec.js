// @ts-check
import { test, expect } from '@playwright/test';
import { test as setup } from '@playwright/test';

// Playwright end-to-end testing ---->

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

//Log into Kindr site
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://kindr.netlify.app/');
  await page.getByPlaceholder('Your email address').fill('christian.d.willcox@gmail.com');
  await page.getByPlaceholder('Your password').fill('Ma&Y*935$*@k5q');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://kindr.netlify.app/');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  // await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
