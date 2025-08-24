//import playwright test library
import { test, expect } from "@playwright/test";

//define a test
test("My first test", async ({ page }) => {
	//navigate to the url
	await page.goto("https://www.google.com/");

	//assert the title
	await page.getByRole("combobox", { name: "Пошук" }).click();
	await page.getByRole("combobox", { name: "Пошук" }).fill("Playwright");
	await page.getByRole("combobox", { name: "Пошук" }).press("Enter");

	page.getByRole("link", { name: "Playwright: Fast and reliable" }).first().click();
	await expect(page).toHaveTitle(
		"Playwright: Fast and reliable end-to-end testing for modern web apps | Playwright"
	);
});
