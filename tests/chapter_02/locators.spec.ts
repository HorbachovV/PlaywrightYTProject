import { test, expect } from "@playwright/test";

test("Locators test", async ({ page }) => {
	// await page.goto("https://github.com/BakkappaN/");

	// await page.getByRole("link", { name: "Sign In" }).click();
	// await page.getByLabel("Homepage ", { exact: true}).first().click();
	// await page.getByAltText("View BakkappaN's full-sized avatar").click();
	// await page.getByTestId("repositories").first().click();
    // await page.getByText("Sign up").click();

    // await page.goto("https://www.youtube.com/@testerstalk");
    // await page.getByPlaceholder("Search").fill("CI/CD");
    // await page.locator('//input[placeholder="Search"]').fill("CI/CD");
    // await page.locator("input[placeholder='Search']").first().fill("CI/CD");

    await page.goto("https://www.google.com/");
    await page.getByTitle("Пошук").fill("Playwright");
});
