// spec.js
describe('Angular 1', function() {

//   beforeEach(function() {
//     foo += 1;
//   });
//   // afterEach(function() {
//   //   browser.executeScript("sauce:context=End test*******");
//   //   browser.executeScript("sauce:job-name=My awesome job");
//   //   browser.executeScript("sauce:status=" + spec.result.status);
//   // });
//   afterEach(function (done) {
//     driver.executeScript("sauce:job-result=" + (true ? "passed" : "failed"));
//     driver.quit();
//     done();
// });
  it('should add a todo', function() {
    browser.executeScript("sauce:context=Going to 'An Angular 1 app'*****");
    browser.executeScript("sauce:job-build=Protractor");
    browser.get('https://angularjs.org');

    for(i = 0; i < 10; i++){
      addItemToList('write ${i} protractor test');
    }
    expect(true);
  });
});

function addItemToList(message)
{
  browser.executeScript("sauce:context=Send keys next...'");
  element(by.model('todoList.todoText')).sendKeys(message);
  browser.executeScript("sauce:context=Click is next...'");
  element(by.css('[value="add"]')).click();
}