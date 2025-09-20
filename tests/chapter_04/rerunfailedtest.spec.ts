//npx playwright test --last-failed
import { test, expect } from "@playwright/test";

test("Test 1", async ({ page }) => {
	await page.goto("https://jqueryui.com/datepicker/");

	const iframe = page.frameLocator(".demo-frame");

	await iframe.locator("#datepicker").click();
	await iframe.locator("[title='Next']").click();
	await iframe.locator("text='15'").click();
});

test("Test 2", async ({ page }) => {
	await page.goto("https://jqueryui.com/datepicker/");

	expect(true).toBe(false); // Intentional failure
});

test("Test 3", async ({ page }) => {
	await page.goto("https://jqueryui.com/datepicker/");

	expect(true).toBe(false); // Intentional failure
});
