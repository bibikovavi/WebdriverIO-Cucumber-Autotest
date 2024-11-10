import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^User on the login page for negative test$/, async () => {
	await browser.url(`https://www.saucedemo.com`);
});

When(/^User enters (.*)> and (.*)$/, async (invalidUsername, invalidPassword) => {
	const invalidUsernameInput = await $('[data-test="username"]');
    const invalidPasswordInput = await $('[data-test="password"]');

    await invalidUsernameInput.waitForDisplayed();
    await invalidPasswordInput.waitForDisplayed();

    await invalidUsernameInput.setValues(invalidUsername);
    await invalidPasswordInput.setValues(invalidPassword);
});

When(/^click log in button$/, async () => {
	await $('[data-test="login-button"]').click();
});

Then(/^Error (.*)$/, async (message) => {
    // await expect($('[class="error-message-container"]')).toBeExisting();
    await expect($('[data-test="error"]')).toHaveText(message);
});
