import {test,chromium} from "@playwright/test";
test ("intro",async()=>{

    const browser = await chromium.launch({
        headless:false
    })
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.flipkart.com/");
   
    const login = await page.locator("//span[text()='Login']").click()
    const mobileno = await page.locator("//input[@type='number']").fill("9342478461")
    const button = await page.locator("//button[text()='Continue']").click()
    await page.waitForTimeout(2000);
    await page.close();
})