import { test, expect } from '@playwright/test';

test.use({ storageState: '.auth/user.json' });

test('Close transfer form', async ({ page }) => {

  await page.goto('/');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await expect(page.getByPlaceholder('+7 999 123-45-67')).not.toBeVisible();
});


test('Transfer with insufficient balance', async ({ page }) => {

  await page.goto('/');

  const phone = page.locator('input[name="phone"]');
  const amount = page.locator('input[name="amount"]');
  const purpose = page.locator('input[name="purpose"]');

  await phone.fill('+79991234567');
  await amount.fill('100');
  await purpose.fill('test transfer');

  await page.getByRole('button', { name: 'Send' }).click();

  await expect(phone).toBeVisible();
});


test('Transfer with negative amount', async ({ page }) => {

  await page.goto('/');

  const phone = page.locator('input[name="phone"]');
  const amount = page.locator('input[name="amount"]');
  const purpose = page.locator('input[name="purpose"]');

  await phone.fill('+79991234567');
  await amount.fill('-100');
  await purpose.fill('test transfer');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(phone).toBeVisible();
});


test('Transfer with zero amount', async ({ page }) => {

  await page.goto('/');

  const phone = page.locator('input[name="phone"]');
  const amount = page.locator('input[name="amount"]');
  const purpose = page.locator('input[name="purpose"]');

  await phone.fill('+79991234567');
  await amount.fill('0');
  await purpose.fill('test transfer');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(phone).toBeVisible();
});
