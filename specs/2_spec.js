import { ProtractorBrowser } from "protractor";

// spec.js
describe('Angular 7 app', function() {
  it('should greet the named user', function() {
    browser.executeScript("sauce:context=Going to 'http://akveo.com/ngx-admin/pages/dashboard'");
    browser.executeScript("sauce:context=Going to 'This is an Angular 7 app'");
    browser.get('http://akveo.com/ngx-admin/pages/dashboard');

    window.getAngularTestability();
    element(by.css('span.menu-title'))
    browser.executeScript("sauce:context=Sending text to name input field");
    element(by.model('yourName')).sendKeys('Example');

    browser.executeScript("sauce:context=Asserting 'Hello Example!' text is present");
    var greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Example!');
  });
});