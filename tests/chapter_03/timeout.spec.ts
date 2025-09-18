import { test, expect } from '@playwright/test';


test('Timeouts test', async ({ page }) => {
    test.setTimeout(1 * 60 * 1000);
    await page.goto('https://www.google.com/');

    await page.getByLabel('Пошук', { exact: true }).fill('playwright by testers talk');
    await page.getByLabel('Пошук', { exact: true }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click({timeout: 5000});

    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube', {timeout : 5000});

   // await page.waitForTimeout(60000);
});