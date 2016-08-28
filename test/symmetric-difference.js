/* globals describe, it */

const assert = require('assert')
const sym = require('../symmetric-difference')

describe('Symmetric Difference', function () {
  var tests = [
    { param: [[1, 2, 3], [5, 2, 1, 4]], expected: [3, 4, 5] },
    { param: [[1, 2, 5], [2, 3, 5], [3, 4, 5]], expected: [1, 4, 5] },
    { param: [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]], expected: [1, 4, 5] },
    {
      param: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]],
      expected: [2, 3, 4, 6, 7]
    },
    {
      param: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]],
      expected: [1, 2, 4, 5, 6, 7, 8, 9]
    }
  ]

  tests.forEach(function (test) {
    var args = JSON.stringify(test.param).slice(1, -1).replace(/,/g, ', ')

    it('sym(' + args + ') should return [' + test.expected.join(', ') + '].',
      function () {
        var result = sym.apply(this, test.param)
        assert.deepStrictEqual(result, test.expected)
      }
    )
  })
})
