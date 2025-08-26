import { test, expect } from "@playwright/test";

test("Screenshots test", async ({ page }) => {

    await page.goto("https://www.youtube.com/@testerstalk");

    // Element Screenshot
    await page.locator('#page-header-container').screenshot({ path: './screenshots/ElementScreenshot.png' });

    // Page Screenshot
    await page.screenshot({ path: './screenshots/VisiblePageScreenshot.png'});

    // Full Page Screenshot
    await page.screenshot({ path: './screenshots/FullPageScreenshot.png', fullPage: true });
});
