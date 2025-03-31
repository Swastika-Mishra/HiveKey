import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth.json' });

test('Verify dashboard loads with saved session', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard');
  await expect(page).toHaveTitle("HiveKey");
});

// test('Update Profile', async ({ page }) => {
//   await page.goto('http://localhost:3000/dashboard');
//   await expect(page).toHaveTitle("HiveKey");
//   await page.getByRole('button', { name: 'Profile' }).click();
//   await page.getByRole('textbox', { name: 'Enter new nickname' }).clear();
//   await page.getByRole('textbox', { name: 'Enter new nickname' }).fill('Jinaya');
//   await page.locator('img:nth-child(6)').click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('button', { name: 'Save Profile' }).click();
// });


  // await page.getByRole('textbox', { name: 'Enter new nickname' }).click();
  // await page.getByRole('textbox', { name: 'Enter new nickname' }).press('ControlOrMeta+a');
  // await page.getByRole('textbox', { name: 'Enter new nickname' }).fill('Jinaya');

test('Navigate back', async({page})=>{
  await page.goto('http://localhost:3000/dashboard');
  await page.getByRole('heading', { name: 'HiveKey' }).click();
});

// test('Logout',async({page})=>{
//   await page.goto('http://localhost:3000/dashboard');
//   await page.getByRole('button', { name: 'Log Out' }).click();
// });