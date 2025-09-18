import { test, expect } from "@playwright/test";

const searchParams = ['Playwright by testers talk', 'Cypress by testers talk', 'Api by testers talk'];

for (const param of searchParams) {
    test(`Parametrize test with param: ${param}`, async ({ page }) => {
        await page.goto("https://www.google.com/");
        await page.getByTitle("Пошук").fill(param);
    });
}