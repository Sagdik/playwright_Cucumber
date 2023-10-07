import {  Browser, expect } from "@playwright/test";
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../hooks/pageFixture";


setDefaultTimeout(60 * 1000 * 2)
let browser: Browser;


Given('user launch url',{timeout: 300000}, async function () {
    

  await fixture.page.goto("https://automationpanda.com/");

  await fixture.page.waitForTimeout(5000);

 

    
  });

  When('select about page',{timeout: 30000}, async function () {
    // Write code here that turns the phrawait fixture.page.waitForTimeout(20000);

    await fixture.page.locator('[href="https://automationpanda.com/about/"]').click();



  });

  When('select contact page',{timeout: 30000}, async function () {
    // Write code here that turns the phrawait fixture.page.waitForTimeout(20000);
  await fixture.page.locator('[id="menu-item-10"]').click();

  
  });

  Then('user validate contact page', async function () {

    const ele = await fixture.page.locator('[class="entry-title"]').textContent();
    expect(ele).toMatch('Contact');
    
  });


  Then('user validate about page', async function () {
    
    
    const buttonValue = await fixture.page.locator('[class="entry-title"]').textContent();

    expect(buttonValue).toMatch('About');

    console.log(buttonValue);
  });
