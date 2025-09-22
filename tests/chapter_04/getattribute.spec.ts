import { test, expect } from "@playwright/test";

test("attribute Test", async ({ page }) => {
	await page.goto("https://github.com/BakkappaN");

	const name = await page.locator('[itemprop="name"]').innerText();
	const finalName = name?.trim();
	console.log(`Name is : ${finalName}`);
	expect(finalName).toBe("Testers Talk");

	const attributeValue = await page
		.getByTestId("repositories")
		.first()
		.getAttribute("data-selected-links");
	console.log(`Attribute value is : ${attributeValue}`);
});
