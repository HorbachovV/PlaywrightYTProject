import { test, expect } from "@playwright/test";

test("Date picker test", async ({ page }) => {
	await page.goto("https://jqueryui.com/datepicker/");

	const iframe = page.frameLocator(".demo-frame");
	// await iframe.locator("#datepicker").fill('09/08/2025');

	// await iframe.locator("#datepicker").click();
	// await iframe.locator(".ui-datepicker-today").click();

    // await iframe.locator("#datepicker").click();
    // await iframe.locator("[title='Prev']").click();
    // await iframe.locator("text='15'").click();

    await iframe.locator("#datepicker").click();
    await iframe.locator("[title='Next']").click();
    await iframe.locator("text='15'").click();
});
