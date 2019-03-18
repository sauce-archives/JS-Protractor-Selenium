describe('custom ngModel component', function() {
  
  it('should have the correct text', function() {
    // setup: visit a sample app with angular component to test
    browser.get('https://storybooks-angular.netlify.com/?path=/story/custom-ngmodel--custom-controlvalueaccessor');
    browser.ignoreSynchronization = true;
    element(by.css('[title="Hide addons"]')).click();

    // verify that this custom Angular element behaves as expected
    var actual = element(by.xpath('//storybook-custom-cva-component')).getText();
    var expected = "Type a value";

    expect(actual).toEqual(expected);
  });

  it('should set the correct text', function() {
    // setup: visit a sample app with angular component to test
    browser.get('https://storybooks-angular.netlify.com/?path=/story/custom-ngmodel--custom-controlvalueaccessor');
    browser.ignoreSynchronization = true;
    element(by.css('[title="Hide addons"]')).click();

    // verify that this custom Angular element behaves as expected
    var expected = "Hello";
    element(by.css('.ng-valid')).sendKeys(expected);
    
    var actual = element(by.xpath('//storybook-custom-cva-component')).getText();
    
    expect(actual).toEqual(expected);
  });
});