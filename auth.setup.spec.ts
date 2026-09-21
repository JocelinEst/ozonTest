import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {
  page.on('response', async response => {
    if (response.url().includes('/api')) {
      console.log(response.status(), response.url());
    }
  });

  await page.goto('/login');
  await page.locator('input[name="email"]').fill('email@mail.ru');
  await page.locator('input[name="password"]').fill('123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(1000);
  await page.context().storageState({ path: '.auth/user.json' });
});