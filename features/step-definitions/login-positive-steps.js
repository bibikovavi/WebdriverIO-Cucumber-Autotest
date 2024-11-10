import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^User is on the login page for positive test$/, async () => {
	await browser.url(`https://www.saucedemo.com`);
});

When(/^User enters (.*) and (.*)$/, async (validUsername, validPassword) => {

    const usernameInput = await $('[data-test="username"]');
    const passwordInput = await $('[data-test="password"]');

    await usernameInput.waitForDisplayed();
    await passwordInput.waitForDisplayed();

    await usernameInput.setValue(validUsername);
    await passwordInput.setValue(validPassword);
});

When(/^clicks login button$/, async () => {
	await $('[data-test="login-button"]').click();
});

Then(/^User logs in$/, async () => {
	const title = await browser.getTitle();
    expect(title).toEqual('Swag Labs');
});
