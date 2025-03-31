import { test, expect } from '@playwright/test';

test('Save Auth0 session', async ({ page }) => {
  await page.goto('https://hive-key.vercel.app/');
  await page.getByRole('button', { name: 'Log In' }).click();
  
  await page.getByRole('textbox', { name: 'Email' }).fill('swastika.mishra2022@vitstudent.ac.in');
  await page.getByRole('textbox', { name: 'Password' }).fill('Jinaya@2783');
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.waitForURL('https://hive-key.vercel.app/dashboard', { timeout: 30000 });

  // ✅ Correct way to save session storage
  await page.context().storageState({ path: 'auth.json' });

  console.log('✅ Auth session saved successfully!');
});
