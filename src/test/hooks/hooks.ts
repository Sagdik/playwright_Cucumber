import { BeforeAll,After,AfterAll,Before } from "@cucumber/cucumber";
import { BrowserType,BrowserContext, Browser, chromium, Page } from "@playwright/test";
import { Fixtures } from "@playwright/test";
import { fixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;

Before(async function(){

    // Write code here that turns the phrase above into concrete actions
    browser = await chromium.launch({ 
        headless:false
    });

    const page = await browser.newPage();
    fixture.page = page;

});

After(async function(){

    // Write code here that turns the phrase above into concrete actionssd
    await browser.close();
    

})