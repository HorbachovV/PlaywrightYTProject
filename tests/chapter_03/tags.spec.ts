// npx playwright test --grep '@TEST1'  to run specific tagged tests
import { test, expect } from "@playwright/test";

test("Test 1", { tag: ["@TEST1"] }, async ({ page }) => {
	await page.goto("https://jqueryui.com/datepicker/");

	const iframe = page.frameLocator(".demo-frame");

	await iframe.locator("#datepicker").click();
	await iframe.locator("[title='Next']").click();
	await iframe.locator("text='15'").click();
});

test("Test 2", { tag: ["@TEST2", "@TEST1"] }, async ({ page }) => {
	await page.goto("https://jqueryui.com/datepicker/");

	const iframe = page.frameLocator(".demo-frame");

	await iframe.locator("#datepicker").click();
	await iframe.locator("[title='Next']").click();
	await iframe.locator("text='15'").click();
});

test("Test 3", { tag: ["@TEST3"] }, async ({ page }) => {
	await page.goto("https://jqueryui.com/datepicker/");

	const iframe = page.frameLocator(".demo-frame");

	await iframe.locator("#datepicker").click();
	await iframe.locator("[title='Next']").click();
	await iframe.locator("text='15'").click();
});
