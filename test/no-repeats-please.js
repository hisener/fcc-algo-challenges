/* globals describe, it */

const assert = require('assert')
const permAlone = require('../no-repeats-please')

describe('No repeats please', function () {
  var tests = [
    { param: 'aab', expected: 2 },
    { param: 'aaa', expected: 0 },
    { param: 'aabb', expected: 8 },
    { param: 'abcdefa', expected: 3600 },
    { param: 'abfdefa', expected: 2640 },
    { param: 'zzzzzzzz', expected: 0 },
    { param: 'a', expected: 1 },
    { param: 'aaab', expected: 0 },
    { param: 'aaabb', expected: 12 }
  ]

  tests.forEach(function (test) {
    it('permAlone("' + test.param + '") should return ' + test.expected + '.',
      function () {
        var result = permAlone(test.param)
        assert.strictEqual(result, test.expected)
      }
    )
  })
})
