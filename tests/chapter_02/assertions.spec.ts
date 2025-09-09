import { test, expect } from "@playwright/test";

test("Assertions test", async ({ page }) => {
	await page.goto("https://www.youtube.com/");

	const search = page.getByPlaceholder("Search", { exact: true }).first();

	//hard assertions
	// await expect(search).toBeVisible();
	// await expect(search).toBeEditable();
	// await expect(search).toBeEnabled();
	// await expect(search).toBeEmpty();

	// await search.fill("playwright by testers talk");
	// await search.press("Enter");
	// await expect(page).toHaveURL(
	// 	"https://www.youtube.com/results?search_query=playwright+by+testers+talk"
	// );
	// await expect(page).toHaveTitle(/playwright by testers talk/);
	// await expect(page.locator("span[id='title'").first()).toHaveText(
	// 	"Playwright by Testers Talk"
	// );
	// await expect(page.locator("span[id='title'")).toHaveCount(4);
	// await expect(page.locator("span[id='title'")).toBeDisabled();

	// soft assertions
	await expect(search).toBeVisible();
	await expect(search).toBeEditable();
	await expect(search).toBeEnabled();
	await expect(search).toBeEmpty();

	await search.fill("playwright by testers talk");
	await search.press("Enter");
	await expect(page).toHaveURL(
		"https://www.youtube.com/results?search_query=playwright+by+testers+talk"
	);
	await expect.soft(page).toHaveTitle(/playwrigh testers talk/);
	await expect(page).toHaveTitle(/playwright by testers talk/);
});
