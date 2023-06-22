// @ts-check
import { test, expect } from '@playwright/test';
import { test as setup } from '@playwright/test';

// Playwright end-to-end testing ---->

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test('Post a transport task', async ({ page }) => {
  // locate the Post a Task button and click it
  await page.getByRole('button', { name: 'Post a Task' }).click();

  // ensure that the page has been redirected to the categories page
  await expect(page.url()).toBe('http://localhost:3000/categories');

  // check that there are 6 images inside the .category-item elements
  const categoryItems = await page.locator('.category-item');
  await expect (categoryItems).toHaveCount(6);
  
  // check that there is a transport image inside the .category-item element
  const transportImage = await page.locator('.category-item img[src="/images/transport.png"]');

// click transport image
await page.click('div.category-item:has-text("Transport")');

// check that the page has been redirected to the create task page
await expect(page.url()).toBe('http://localhost:3000/create');

// check that the page contains the image of a tyre"  
const tyreImage = await page.locator('img[src="/images/tyre.png"]');
});

test('Post a gardening task', async ({ page }) => {
  // locate the Post a Task button and click it
  await page.getByRole('button', { name: 'Post a Task' }).click();

  // ensure that the page has been redirected to the categories page
  await expect(page.url()).toBe('http://localhost:3000/categories');

  // check that there are 6 images inside the .category-item elements
  const categoryItems = await page.locator('.category-item');
  await expect (categoryItems).toHaveCount(6);
  
  // check that there is a transport image inside the .category-item element
  const Image = await page.locator('.category-item img[src="/images/gardening.png"]');

// click transport image
await page.click('div.category-item:has-text("Gardening")');

// check that the page has been redirected to the create task page
await expect(page.url()).toBe('http://localhost:3000/create');

// check that the page contains the image of a tyre"  
const Icon = await page.locator('img[src="/images/gardening.png"]');
});

test('Post a delivery task', async ({ page }) => {
  // locate the Post a Task button and click it
  await page.getByRole('button', { name: 'Post a Task' }).click();

  // ensure that the page has been redirected to the categories page
  await expect(page.url()).toBe('http://localhost:3000/categories');

  // check that there are 6 images inside the .category-item elements
  const categoryItems = await page.locator('.category-item');
  await expect (categoryItems).toHaveCount(6);
  
  // check that there is a transport image inside the .category-item element
  const deliveryImage = await page.locator('.category-item img[src="/images/delivery.png"]');

// click transport image
await page.click('div.category-item:has-text("Delivery")');

// check that the page has been redirected to the create task page
await expect(page.url()).toBe('http://localhost:3000/create');

// check that the page contains the image of a tyre"  
const vanImage = await page.locator('img[src="/images/delivery-truck.png"]');
});

test('Post an other task', async ({ page }) => {
  // locate the Post a Task button and click it
  await page.getByRole('button', { name: 'Post a Task' }).click();

  // ensure that the page has been redirected to the categories page
  await expect(page.url()).toBe('http://localhost:3000/categories');

  // check that there are 6 images inside the .category-item elements
  const categoryItems = await page.locator('.category-item');
  await expect (categoryItems).toHaveCount(6);

// click transport image
await page.click('div.category-item:has-text("Other")');

// check that the page has been redirected to the create task page
await expect(page.url()).toBe('http://localhost:3000/create');

// check that the page contains the image of a tyre"  
const Icon = await page.locator('img[src="/images/other.png"]');
});