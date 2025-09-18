import { test, expect } from "@playwright/test";

test("Visual Test", async ({ page }) => {
	await page.goto("https://github.com/login");

	await expect(page).toHaveScreenshot("GithubLogin.png");
});
