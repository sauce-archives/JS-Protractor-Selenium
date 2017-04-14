// spec.js
describe('Protractor Demo App1', function() {
  it('should greet the named user', function() {
    browser.executeScript("sauce:context=Going to 'angularjs.org'");
    browser.get('http://www.angularjs.org');

    browser.executeScript("sauce:context=Sending text to name input field");
    element(by.model('yourName')).sendKeys('Example');

    browser.executeScript("sauce:context=Asserting 'Hello Example!' text is present");
    var greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Example!');
  });
});