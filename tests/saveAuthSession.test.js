import { test } from '@playwright/test';

test('Save Auth0 session', async ({ page, context }) => {
//   const storagePath = 'tests/auth.json';

  await page.goto('https://hive-key.vercel.app/');
  await page.getByRole('button', { name: 'Log In' }).click();
  
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.AUTH0_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.AUTH0_PASSWORD);
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.waitForURL('https://hive-key.vercel.app/dashboard', { timeout: 30000 });

  await page.context().storageState({ path: 'auth.json' });

  console.log('✅ Auth session saved successfully!');
});
