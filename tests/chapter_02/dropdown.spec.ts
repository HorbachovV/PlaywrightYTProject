import { test, expect } from "@playwright/test";


test("Dropdowns test", async ({ page }) => {
    
    await page.goto("https://www.facebook.com/");

    await page.getByRole("button", { name: "Create new account" }).click(); 
    await page.getByLabel("Month").selectOption("9");
    await page.getByLabel("Year").selectOption("1989");
    await page.getByLabel("Day").selectOption("11"); 

    await page.getByLabel("Month").selectOption("Aug"); 
    await page.getByLabel("Year").selectOption("2008"); 
    await page.getByLabel("Day").selectOption("1"); 

    await expect(page.locator("#month > option")).toHaveText(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
});
