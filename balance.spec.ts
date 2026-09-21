import { test, expect } from '@playwright/test';

test.use({ storageState: '.auth/user.json' });

test.describe.configure({ mode: 'default' });


test('Add balance', async ({ page }) => {

  await page.goto('/transactions');

  const balance = page.locator('h2.header__link');

  const initialBalanceText = await balance.innerText();
  const initialBalance = Number(initialBalanceText.replace('Balance: ', ''));

  await page.getByRole('button', { name: 'Add balance' }).click();
  await page.getByPlaceholder('Enter sum').fill('123');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await expect(balance).toHaveText(`Balance: ${initialBalance + 123}`);
});


test('Add balance zero', async ({ page }) => {

  await page.goto('/transactions');

  const balance = page.locator('h2.header__link');
  const initialBalance = await balance.innerText();

  await page.getByRole('button', { name: 'Add balance' }).click();
  await page.getByPlaceholder('Enter sum').fill('0');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await expect(balance).toHaveText(initialBalance);
});


test('Add balance negative number', async ({ page }) => {

  await page.goto('/transactions');

  const balance = page.locator('h2.header__link');
  const initialBalance = await balance.innerText();

  await page.getByRole('button', { name: 'Add balance' }).click();
  await page.getByPlaceholder('Enter sum').fill('-100');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await expect(balance).toHaveText(initialBalance);
});




test('Add balance decimal with dot', async ({ page }) => {

  await page.goto('/transactions');

  const balance = page.locator('h2.header__link');

  const initialBalanceText = await balance.innerText();
  const initialBalance = Number(initialBalanceText.replace('Balance: ', ''));

  await page.getByRole('button', { name: 'Add balance' }).click();
  await page.getByPlaceholder('Enter sum').fill('12.5');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await expect(balance).toHaveText(`Balance: ${initialBalance + 12.5}`);
});


test('Add balance decimal with comma', async ({ page }) => {

  await page.goto('/transactions');
  await page.getByRole('button', { name: 'Add balance' }).click();

  const input = page.getByPlaceholder('Enter sum');

  await input.pressSequentially('12,5');
  await expect(input).toHaveValue('12.5');
});
test('Add balance very large number', async ({ page }) => {

  await page.goto('/transactions');

  const balance = page.locator('h2.header__link');
  const initialBalance = await balance.innerText();

  await page.getByRole('button', { name: 'Add balance' }).click();
  await page.getByPlaceholder('Enter sum').fill('999999999999999999999999999999');
  await page.getByRole('button', { name: 'Add', exact: true }).click();
  await expect(balance).toHaveText(initialBalance);
});