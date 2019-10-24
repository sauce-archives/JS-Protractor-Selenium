const expect = require('chai').expect;

describe('Valid login', () => {
  it('should be able to login successfully', async () => {
    browser.ignoreSynchronization = true;
    await browser.get('https://www.saucedemo.com');

    await element(by.id('user-name')).sendKeys('standard_user');
    await element(by.id('password')).sendKeys('secret_sauce');
    await element(by.css('.btn_action')).click()

    const currentUrl = await browser.getCurrentUrl();
    expect(currentUrl.includes("inventory")).to.be.true;
  });
});