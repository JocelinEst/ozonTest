import { test, expect } from '@playwright/test';

test('Authorize positive', async ({ page }) => {
  await page.goto('/login');
  await page.getByPlaceholder('Type your email').fill('email@mail.ru');
  await page.getByPlaceholder('Type your password').fill('123');
  await page.getByRole('button').click();
  await expect(page).toHaveURL('/');
});
test('Authorize incorrect user', async ({ page }) => {
  await page.goto('/login');
  await page.getByPlaceholder('Type your email').fill('111email@mail.ru');
  await page.getByPlaceholder('Type your password').fill('111123');
  await page.getByRole('button').click();
   await expect(page).toHaveURL('/login');
});
test('Authorize incorrect password', async ({ page }) => {
  await page.goto('/login');
  await page.getByPlaceholder('Type your email').fill('email@mail.ru');
  await page.getByPlaceholder('Type your password').fill('111123');
  await page.getByRole('button').click();
  await expect(page).toHaveURL('/login');
});
test('Authorize empty', async ({ page }) => {
  await page.goto('/login');
  await page.getByRole('button').click();
   await expect(page).toHaveURL('/login');
});