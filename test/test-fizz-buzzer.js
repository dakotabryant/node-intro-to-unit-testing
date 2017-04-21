const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizz-buzz-checker` function
describe('fizz-buzz-checker', function() {
  it('should return "fizz-buzz" for multiples of 15', function() {
    [15, 30, 45].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });
  it ('should return "fizz" for multiples of 3', () => {
    [3, 6, 9].forEach(input => {
      fizzBuzzer(input).should.equal('fizz');
    });
  });
  it ('should return "buzz" for multiples of 5', () => {
    [5, 10, 20].forEach(input => {
      fizzBuzzer(input).should.equal('buzz');
    });
  });
  it ('should return the number if its not divisble by 3, 5, or 15', () => {
    [1, 4, 7].forEach(input => {
      fizzBuzzer(input).should.equal(input);
    });
  });
  it('should produce error if input isn\'t number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]]
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
