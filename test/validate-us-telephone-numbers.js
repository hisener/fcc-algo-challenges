/* globals describe, it */

const assert = require('assert')
const telephoneCheck = require('../validate-us-telephone-numbers')

describe('Validate US Telephone Numbers', function () {
  var tests = [
    { param: '555-555-5555', expected: true },
    { param: '1 555-555-5555', expected: true },
    { param: '1 (555) 555-5555', expected: true },
    { param: '5555555555', expected: true },
    { param: '(555)555-5555', expected: true },
    { param: '1(555)555-5555', expected: true },
    { param: '555-5555', expected: false },
    { param: '5555555', expected: false },
    { param: '1 555)555-5555', expected: false },
    { param: '1 555 555 5555', expected: true },
    { param: '1 456 789 4444', expected: true },
    { param: '123**&!!asdf#', expected: false },
    { param: '55555555', expected: false },
    { param: '(6505552368)', expected: false },
    { param: '2 (757) 622-7382', expected: false },
    { param: '0 (757) 622-7382', expected: false },
    { param: '-1 (757) 622-7382', expected: false },
    { param: '2 757 622-7382', expected: false },
    { param: '10 (757) 622-7382', expected: false },
    { param: '27576227382', expected: false },
    { param: '(275)76227382', expected: false },
    { param: '2(757)6227382', expected: false },
    { param: '2(757)622-7382', expected: false },
    { param: '555)-555-5555', expected: false },
    { param: '(555-555-5555', expected: false },
    { param: '(555)5(55?)-5555', expected: false }
  ]

  tests.forEach(function (test) {
    it('telephoneCheck("' + test.param + '") should return ' + test.expected + '.',
      function () {
        var result = telephoneCheck(test.param)
        assert.strictEqual(result, test.expected)
      }
    )
  })
})
