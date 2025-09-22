//npm install dotenv --save
import { test, expect } from "@playwright/test";

test("Read ENV Test", async ({ page }) => {
	await page.goto(`${process.env.GOOGLE_URL}`);

	await page
		.getByLabel("Пошук", { exact: true })
		.fill(`${process.env.SEARCH_KEYWORDS}`);
	await page.getByLabel("Пошук", { exact: true }).press("Enter");

	await page
		.getByRole("link", { name: `${process.env.SEARCH_KEYWORDS}` })
		.first()
		.click();

	await expect(page).toHaveTitle(
		`${process.env.SEARCH_KEYWORDS}` + "☑️ - YouTube"
	);
});
