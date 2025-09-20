import { test, expect } from "@playwright/test";

test("Browser context Test", async ({ page, browser }) => {
	await page.goto("https://jqueryui.com/datepicker/");

	const iframe = page.frameLocator(".demo-frame");

	await iframe.locator("#datepicker").click();
	await iframe.locator("[title='Next']").click();
	await iframe.locator("text='15'").click();

    // Create a new browser context and page
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto("https://jqueryui.com/datepicker/");
    const iframe2 = page2.frameLocator(".demo-frame");

	await iframe2.locator("#datepicker").click();
	await iframe2.locator("[title='Next']").click();
	await iframe2.locator("text='15'").click();

    // Create a new tab in the same context
    const newTab = await context2.newPage(); 
    await newTab.goto("https://jqueryui.com/datepicker/");
});
