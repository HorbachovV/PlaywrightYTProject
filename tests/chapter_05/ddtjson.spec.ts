import { test, expect } from "@playwright/test";
import testData from "../../test-data/qa/testdata.json";

type TestData = {
	TestDataSet1: {
		Skill1: string;
		Skill2: string;
		Skill3: string;
		Skill4: string;
		Skill5: string;
		Skill6: string;
		Skill7: string;
	};
	TestDataSet2: {
		Skill1: string;
		Skill2: string;
		Skill3: string;
		Skill4: string;
		Skill5: string;
		Skill6: string;
		Skill7: string;
	};
};
const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {
	const skill = typedTestData[dataSetName as keyof TestData];

	test(
		`Data Driven Test JSON file: ${skill.Skill2}`,
		{ tag: ["@DataDrivenTesting"] },
		async ({ page }) => {
			console.log(`Data set name : ${dataSetName}`);
			console.log(`Skill : ${skill.Skill1}`);
			console.log(`Skill : ${skill.Skill2}`);
			console.log(`Skill : ${skill.Skill3}`);
			console.log(`Skill : ${skill.Skill4}`);
			console.log(`Skill : ${skill.Skill5}`);
			console.log(`Skill : ${skill.Skill6}`);
			console.log(`Skill : ${skill.Skill7}`);

			await page.goto("https://www.google.com/");

			await page.getByLabel("Пошук", { exact: true }).fill(skill.Skill2);
			await page.getByLabel("Пошук", { exact: true }).press("Enter");

			await page
				.getByRole("link", { name: skill.Skill2 })
				.first()
				.click();

			await expect(page).toHaveTitle(skill.Skill2 + "☑️ - YouTube");
		}
	);
}
