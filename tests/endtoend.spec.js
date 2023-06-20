// @ts-check
import { test, expect } from '@playwright/test';

// const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('Create task', () => {
  test('does post a task button appear', async ({ page }) => {
    //locate post a task button
    await page.getByRole('button', { name: 'Post a Task' }).click();

    // check if the page is redirected to the correct page
    await expect(page.url()).toBe('http://localhost:3000/categories');
  })});