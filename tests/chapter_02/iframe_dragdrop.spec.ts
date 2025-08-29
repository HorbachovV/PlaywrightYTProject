import { test, expect } from "@playwright/test";


test("Iframe drag&drop test", async ({ page }) => {
    
    await page.goto("https://jqueryui.com/droppable/");

    const iframe = page.frameLocator(".demo-frame")
    const dragElement = iframe.locator("#draggable");
    const dropElement = iframe.locator("#droppable");

    await dragElement.dragTo(dropElement);
});
