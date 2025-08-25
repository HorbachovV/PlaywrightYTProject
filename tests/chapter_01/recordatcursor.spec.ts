//import playwright test library
import { test, expect } from "@playwright/test";

//define a test
test("Record at cursor test", async ({ page }) => {
	//navigate to the url
	await page.goto("https://www.google.com/");

	//assert the title
	await page
		.getByLabel("Пошук", { exact: true })
		.fill("playwright by testers talk");
	await page.getByLabel("Пошук", { exact: true }).press("Enter");
	await page
		.getByRole("link", { name: "Playwright by Testers Talk - YouTube" })
		.first()
		.click();

	//assertions
	await expect(
		page.getByLabel("#2 Playwright API Testing").locator("#video-title")
	).toContainText("#2 Playwright API Testing Tutorial Crash Course 2024");
	await expect(page).toHaveTitle("Playwright by Testers Talk - YouTube");
	await expect(
		page.getByRole("link", { name: "#1 Playwright Tutorial Full" })
	).toBeVisible();
	await expect(
		page.getByRole("link", { name: "#2 Playwright API Testing" })
	).toBeVisible();
	await expect(
		page.getByLabel("#1 Playwright Tutorial Full").locator("#video-title")
	).toContainText(
		"#1 Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial"
	);
	await expect(
		page.getByLabel("#2 Playwright API Testing").locator("#video-title")
	).toContainText("#2 Playwright API Testing Tutorial Crash Course 2024");
});
