import { test } from "@playwright/test";

test("OMR Branch Details", async ({ page }) => {

    await page.goto("https://www.omrbranch.com/");

    // Page Heading
    const heading = await page.locator("h1").innerText();
    console.log("Page Heading:", heading);

    // Mr. Velmurugan Name
    const name = await page.getByText("Velmurugan").first().innerText();
    console.log("Name:", name);

    // Mobile Number
    const mobile = await page.locator("text=/[0-9]{10}/").first().innerText();
    console.log("Mobile Number:", mobile);

});