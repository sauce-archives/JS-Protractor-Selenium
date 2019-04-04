// spec.js
describe('Angular 1', function() {
  it('should add a todo 6', function() {
    browser.executeScript("sauce:context=Going to 'An Angular 1 app'*****");
    browser.get('https://angularjs.org');

    for(i = 0; i < 10; i++){
      addItemToList('write ${i} protractor test');
    }
    expect(true);

    browser.executeScript("sauce:context=End test*******");
  });
});

function addItemToList(message)
{
  browser.executeScript("sauce:context=Send keys next...'");
  element(by.model('todoList.todoText')).sendKeys(message);
  browser.executeScript("sauce:context=Click is next...'");
  element(by.css('[value="add"]')).click();
}