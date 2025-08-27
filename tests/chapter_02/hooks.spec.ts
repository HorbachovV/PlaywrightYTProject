import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
	console.log("Before all tests");
});

test.afterAll(async () => {
	console.log("After all tests");
});

test.beforeEach(async () => {
	console.log("Before each test");
});

test.afterEach(async () => {
	console.log("After each test");
});

test("Hooks 1 test", async ({ page }) => {
	await page.goto("https://www.google.com/");
	await page.getByTitle("Пошук").fill("Playwright");
});

test("Hooks 2 test", async ({ page }) => {
	await page.goto("https://www.google.com/");
	await page.getByTitle("Пошук").fill("Playwright");
});

test("Hooks 3 test", async ({ page }) => {
	await page.goto("https://www.google.com/");
	await page.getByTitle("Пошук").fill("Selenium");
});
