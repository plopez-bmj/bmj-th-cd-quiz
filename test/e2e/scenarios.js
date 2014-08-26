'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /questions when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/questions");
  });


  describe('answers', function() {

    beforeEach(function() {
      browser.get('index.html#/answers');
    });


    it('should have selected d for question 1', function() {
      expect(element.all(by.id('a1')).first().getText()).
      toContain('-d. independent');
    });

    it('should have selected d for question 2', function() {
      expect(element.all(by.id('a2')).first().getText()).
      toContain('-b. False');
    });

    it('should have selected d for question 3', function() {
      expect(element.all(by.id('a3')).first().getText()).
      toContain('-c. Being transparent and open');
    });

    it('should have selected d for question 4', function() {
      expect(element.all(by.id('a4')).first().getText()).
      toContain('-a. We take pride in our people');
    });

    it('should have selected d for question 5', function() {
      expect(element.all(by.id('a5')).first().getText()).
      toContain('-b. Do, well, not, all');
    });

    it('should have selected d for question 6', function() {
      expect(element.all(by.id('a6')).first().getText()).
      toContain('-a. Users');
    });
    it('should have selected d for question 7', function() {
      expect(element.all(by.id('a7')).first().getText()).
      toContain('-e. healthcare');
    });
    it('should have selected d for question 8', function() {
      expect(element.all(by.id('a8')).first().getText()).
      toContain('-d. courage');
    });

  });

});
