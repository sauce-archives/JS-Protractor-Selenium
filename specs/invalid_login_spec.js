const expect = require('chai').expect;

describe('Invalid login', () => {
  it('should not be able to login successfully', async () => {
    browser.ignoreSynchronization = true;
    await browser.get('https://www.saucedemo.com');

    await element(by.id('user-name')).sendKeys('locked_out_user');
    await element(by.id('password')).sendKeys('secret_sauce');
    await element(by.css('.btn_action')).click();

    expect(await element(by.css('.error-button')).isDisplayed()).to.be.true;
  });
});
