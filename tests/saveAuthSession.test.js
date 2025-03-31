import { test } from '@playwright/test';

test('Save Auth0 session', async ({ page, context }) => {
//   const storagePath = 'tests/auth.json';

  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Log In' }).click();
  
  await page.getByRole('textbox', { name: 'Email' }).fill('swastika.mishra2022@vitstudent.ac.in');
  await page.getByRole('textbox', { name: 'Password' }).fill('Jinaya@2783');
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.waitForURL('http://localhost:3000/dashboard', { timeout: 30000 });

  // ✅ Correct way to save session storage
  await page.context().storageState({ path: 'auth.json' });

  console.log('✅ Auth session saved successfully!');
});
