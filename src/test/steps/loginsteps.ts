import { Given,When,Then } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";

let browser:Browser;
let page: Page;

Given('user launch url',{timeout: 30000}, async function () {
    // Write code here that turns the phrase above into concrete actions
    browser = await chromium.launch({ headless:false});
    page = await browser.newPage();
    
    await page.goto("https://www.flipkart.com/");
    
  });

  When('search for product name',{timeout: 30000}, async function () {
    // Write code here that turns the phrawait page.waitForTimeout(20000);

    await page.locator("button[class ='_2KpZ6l _2doB4z']").click();
    await page.locator("img[alt='Mobiles']").click();
    
  });


  Then('user validate dashboard', async function () {
    
    // Write code here that turns the phrase above into concrete actions
    await browser.close();

  });
