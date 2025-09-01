import { test, expect } from "@playwright/test";

test("Mouse test", async ({ page }) => {
	// await page.goto("https://www.google.com/search?q=playwright+by+testers+talk");

	// await page.getByRole("link", { name: "Playwright by Testers Talk" }).click({ button: "left"});
	// await page.getByRole("link", { name: "Playwright by Testers Talk" }).click({ button: "middle"});
	// await page.getByRole("link", { name: "Playwright by Testers Talk" }).click({ button: "right"});

	await page.goto("https://www.google.com/");
	await page.getByLabel("Пошук голосом").hover();
	await page.getByLabel("Пошук голосом").dblclick();
});
