import { test, expect } from "@playwright/test";

test("Dropdowns test", async ({ page }) => {
	await page.goto("https://google.com/");

	// await page.getByLabel("Пошук", { exact: true }).first().click();
	// await page.getByLabel("Пошук", { exact: true }).first().fill("playwright by testers talk");
	// await page.getByLabel("Пошук", { exact: true }).first().press("Enter");

	// await page.getByLabel("Пошук", { exact: true }).first().click();
	// await page
	// 	.getByLabel("Пошук", { exact: true })
	// 	.first()
	// 	.fill("playwright by testers talk");
    // await page.waitForTimeout(2000);
	// await page.keyboard.press("Control+A");
	// await page.keyboard.press("Delete");

    await page.getByLabel("Пошук", { exact: true }).first().click();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
});
