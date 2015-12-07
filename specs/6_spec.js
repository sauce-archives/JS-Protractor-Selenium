// spec.js
describe('Protractor Demo App1', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Example');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Example!');
  });
});