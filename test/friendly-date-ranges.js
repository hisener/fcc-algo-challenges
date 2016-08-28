/* globals describe, it */

const assert = require('assert')
const makeFriendlyDates = require('../friendly-date-ranges')

describe('Friendly Date Ranges', function () {
  var tests = [
    { param: ['2016-07-01', '2016-07-04'],
      expected: ['July 1st', '4th'] },
    { param: ['2016-12-01', '2017-02-03'],
      expected: ['December 1st', 'February 3rd'] },
    { param: ['2016-12-01', '2018-02-03'],
      expected: ['December 1st, 2016', 'February 3rd, 2018'] },
    { param: ['2017-03-01', '2017-05-05'],
      expected: ['March 1st,2017', 'May 5th'] },
    { param: ['2018-01-13', '2018-01-13'],
      expected: ['January 13th, 2018'] },
    { param: ['2022-09-05', '2023-09-04'],
      expected: ['September 5th, 2022', 'September 4th'] },
    { param: ['2022-09-05', '2023-09-05'],
      expected: ['September 5th, 2022', 'September 5th,2023'] }
  ]

  tests.forEach(function (test) {
    var args = JSON.stringify(test.param).replace(/,/g, ', ')
    var returnVal = JSON.stringify(test.expected).replace(/,/g, ', ')

    it('makeFriendlyDates(' + args + ') should return ' + returnVal + '.',
      function () {
        var result = makeFriendlyDates(test.param)
        assert.deepStrictEqual(result, test.expected)
      }
    )
  })
})
