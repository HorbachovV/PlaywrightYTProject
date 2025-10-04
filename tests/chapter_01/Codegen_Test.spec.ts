import { test, expect } from "@playwright/test";

test(
	"Codegen test case",
	{ tag: ["@PlaywrightWithJenkin"] },
	async ({ page }) => {
		await page.goto("https://www.youtube.com/");
		await page.getByPlaceholder("Search").first().click();
		await page
			.getByPlaceholder("Search")
			.first()
			.fill("playwright by testers talk ");
		await page.getByRole("button", { name: "Search", exact: true }).click();
		await page
			.getByRole("link", { name: "Playwright by Testers Talk☑️" })
			.click();
		await page.locator("video").click();
		await expect(
			page.getByRole("link", { name: "Playwright by Testers Talk☑️" })
		).toBeVisible();
	}
);

test(
	"Test 2 will fail",
	{ tag: ["@PlaywrightWithJenkin"] },
	async ({ page }) => {
		await page.goto("https://www.youtube.com/@testerstalk");
		expect(true).toBe(false);
	}
);
