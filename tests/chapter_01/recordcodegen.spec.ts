//npx playwright codegen
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("https://www.youtube.com/");
	await page.getByPlaceholder("Search").click();
	await page.getByPlaceholder("Search").fill("Playwright by Testers Talk");
	await page.getByRole("button", { name: "Search", exact: true }).click();
	await page
		.getByRole("link", { name: "Playwright by Testers Talk☑️" })
		.click();

	await expect(
		page.getByRole("link", { name: "Playwright by Testers Talk☑️" })
	).toBeVisible();
});
