/*
reporter: [
    ["html"],
    ["json", { outputFile: "test-results.json" }],
    ["junit", { outputFile: "results.xml" }],
    ["list"],
    // ["dot"],
],
*/
import { test, expect } from "@playwright/test";

test.describe("Testing Reports", () => {
	test("Test 1", async ({ page }) => {
		await page.goto("https://www.goole.com/");

		await page
			.getByLabel("Пошук", { exact: true })
			.fill("playwright by testers talk");
		await page.getByLabel("Пошук", { exact: true }).press("Enter");
	});
	test("Test 2", async ({ page }) => {
		await page.goto("https://www.google.com/");

		await page
			.getByLabel("Пошук", { exact: true })
			.fill("playwright by testers talk");
		await page.getByLabel("Пошук", { exact: true }).press("Enter");
	});

	test("Test 3", async ({ page }) => {
		await page.goto("https://www.google.com/");

		await page
			.getByLabel("Пошук", { exact: true })
			.fill("playwright by testers talk");
		await page.getByLabel("Пошук", { exact: true }).press("Enter");
	});

	test("Test 4", async ({ page }) => {
		await page.goto("https://www.google.com/");

		await page
			.getByLabel("Пошук", { exact: true })
			.fill("playwright by testers talk");
		await page.getByLabel("Пошук", { exact: true }).press("Enter");
	});
});
