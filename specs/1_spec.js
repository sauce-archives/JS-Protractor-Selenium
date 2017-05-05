// spec.js
describe('Protractor Demo App1', function() {
  it('should greet the named user', function() {
    browser.executeScript("sauce:context=Going to http app");
    browser.get('http://ec2-54-70-243-19.us-west-2.compute.amazonaws.com:8000/#/');
    browser.ignoreSynchronization = false;


    browser.executeScript("sauce:context=click tab 1");
    element(by.css('.index')).click();

    browser.executeScript("sauce:context=Sending keys");
    element(by.css('#input1')).sendKeys('123');
  });
});