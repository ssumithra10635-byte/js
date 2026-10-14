import{test,chromium}from '@playwright/test'
test('dropDown',async()=>{

    const browser = await chromium.launch({
        headless:false
    })
    const context = await browser.newContext()
    const page =await context.newPage()

    await page.goto("https://www.omrbranch.com/seleniumtraininginchennaiomr",
        {
           // waitUntil:'domcontentloaded'
        }
      )
     
      const course = page.locator("//a[text()='Courses ']")
      await course.hover()
      const option = page.locator("//a[text()='Selenium']").nth(0)
      await option.click();

      await page.locator('#email').fill('greenstechchennaiomr@gmail.com')
      await page.locator('#pass').fill('Greens@123')
      await page.locator("//button[text()='Login']").click()
    await page.waitForTimeout(2000);
    await page.close();

});

    
    
