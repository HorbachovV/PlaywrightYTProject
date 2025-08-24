import { test, expect } from "@playwright/test";

test("Github test", async ({ page }) => {
	await test.step("Go to GitHub", async () => {
		await page.goto("https://github.com/");
	});

	await test.step("Enter incorrect credentials", async () => {
		await page.getByRole("link", { name: "Sign in" }).click();
		await page
			.getByRole("textbox", { name: "Username or email address" })
			.click();
		await page
			.getByRole("textbox", { name: "Username or email address" })
			.fill("admin");
		await page.getByRole("textbox", { name: "Password" }).click();
		await page.getByRole("textbox", { name: "Password" }).fill("admin");
		await page
			.getByRole("button", { name: "Sign in", exact: true })
			.click();
	});

	await test.step("Check for error message", async () => {
		await expect(page.getByRole("alert")).toContainText(
			"Incorrect username or password."
		);
	});

});
