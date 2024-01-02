
const { Given, When, Then }= require ( '@cucumber/cucumber')
//const login =require ( '../../src/pages/loginPage');

Given(/^I am on the site$/, async function () {
    await browser.url('https://demo.guru99.com/test/newtours/');
});

When(/^I wan to register a user$/, async function () {
    
    await $('//input[@name="userName"]').setValue('test');
    await $('//input[@name="password"]').setValue('test2');
    await $('//input[@name="submit"]').click();
});

Then(/^I validate the user was registered$/, async function () {
    await expect($('//h3[normalize-space()="Login Successfully"]')).toBeDisplayed();
});
