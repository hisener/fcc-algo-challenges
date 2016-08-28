/* globals describe, it */

const assert = require('assert')
const pairwise = require('../pairwise')

describe('Pairwise', function () {
  var tests = [
    { param: [[1, 4, 2, 3, 0, 5], 7], expected: 11 },
    { param: [[1, 3, 2, 4], 4], expected: 1 },
    { param: [[1, 1, 1], 2], expected: 1 },
    { param: [[0, 0, 0, 0, 1, 1], 1], expected: 10 },
    { param: [[], 100], expected: 0 }
  ]

  tests.forEach(function (test) {
    var args = JSON.stringify(test.param).slice(1, -1).replace(/,/g, ', ')

    it('pairwise(' + args + ') should return ' + test.expected + '.',
      function () {
        var result = pairwise.apply(this, test.param)
        assert.deepStrictEqual(result, test.expected)
      }
    )
  })
})
