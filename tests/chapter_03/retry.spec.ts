/* Retry on CI only */
// retries: process.env.CI ? 2 : 1,
import { test, expect } from "@playwright/test";

test("Test 1", async ({ page }) => {
	await page.goto("https://jqueryui.com/datepicker/");

	const iframe = page.frameLocator(".demo-fram");

	await iframe.locator("#datepicker").click();
	await iframe.locator("[title='Next']").click();
	await iframe.locator("text='15'").click();
});
