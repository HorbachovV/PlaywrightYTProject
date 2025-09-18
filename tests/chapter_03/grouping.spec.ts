import { test, expect } from "@playwright/test";

test.describe("Grouping tests 1", () => {
    test("Test 1", async ({ page }) => {
        await page.goto("https://jqueryui.com/datepicker/");

        const iframe = page.frameLocator(".demo-frame");

        await iframe.locator("#datepicker").click();
        await iframe.locator("[title='Next']").click();
        await iframe.locator("text='15'").click();
    });
});
test.describe("Grouping tests 2-3", () => {
    test("Test 2", async ({ page }) => {
        await page.goto("https://jqueryui.com/datepicker/");

        const iframe = page.frameLocator(".demo-frame");

        await iframe.locator("#datepicker").click();
        await iframe.locator("[title='Next']").click();
        await iframe.locator("text='15'").click();
    });

    test("Test 3", async ({ page }) => {
        await page.goto("https://jqueryui.com/datepicker/");

        const iframe = page.frameLocator(".demo-frame");

        await iframe.locator("#datepicker").click();
        await iframe.locator("[title='Next']").click();
        await iframe.locator("text='15'").click();
    });
});




