import { test,chromium } from "@playwright/test";
test ( 'intro',async()=>{

    const browser = await chromium.launch({headless:false})

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.omrbranch.com/apitestingtraininginchennaiomr");

    const dropdown = page.locator("#country-list")

    await dropdown.selectOption({
        label:"GreenLand"
    })

                                                                                
    
    await page.waitForTimeout(2000);
    await page.close()
})
