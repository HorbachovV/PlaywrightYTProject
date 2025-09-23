import { test, expect } from "@playwright/test";

import path from "path";
import { readExcelFile } from "../../src/utils/ExcelHelper";

const filePath = path.join(__dirname, "../../test-data/qa/TestData.xlsx");
const records = readExcelFile(filePath);

for (const record of records) {
	test(
		`Testing Using Excel : ${record.Skill2}`,
		{ tag: ["@DataDrivenTesting"] },
		async ({ page }) => {
			console.log(`Excel file row data`);
			console.log(`Skill 1 : ${record.Skill1}`);
			console.log(`Skill 2 : ${record.Skill2}`);

			await page.goto("https://www.google.com/");

			await page.getByLabel("Пошук", { exact: true }).fill(record.Skill2);
			await page.getByLabel("Пошук", { exact: true }).press("Enter");

			await page
				.getByRole("link", { name: record.Skill2 })
				.first()
				.click();

			await expect(page).toHaveTitle(record.Skill2 + "☑️ - YouTube");
		}
	);
}
