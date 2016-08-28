/* globals describe, it */

const assert = require('assert')
const updateInventory = require('../inventory-update')

describe('Inventory Update', function () {
  var tests = [
    {
      param: [[[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'],
        [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'],
        [67, 'Bowling Ball'], [7, 'Toothpaste']]],
      expected: [[88, 'Bowling Ball'], [2, 'Dirty Sock'], [3, 'Hair Pin'],
        [3, 'Half-Eaten Apple'], [5, 'Microphone'], [7, 'Toothpaste']]
    },
    {
      param: [[[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'],
        [5, 'Microphone']], []],
      expected: [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'],
        [5, 'Microphone']]
    },
    {
      param: [[], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'],
        [67, 'Bowling Ball'], [7, 'Toothpaste']]],
      expected: [[67, 'Bowling Ball'], [2, 'Hair Pin'], [3, 'Half-Eaten Apple'],
        [7, 'Toothpaste']]
    },
    {
      param: [[[0, 'Bowling Ball'], [0, 'Dirty Sock'], [0, 'Hair Pin'],
        [0, 'Microphone']], [[1, 'Hair Pin'], [1, 'Half-Eaten Apple'],
        [1, 'Bowling Ball'], [1, 'Toothpaste']]],
      expected: [[1, 'Bowling Ball'], [0, 'Dirty Sock'], [1, 'Hair Pin'],
        [1, 'Half-Eaten Apple'], [0, 'Microphone'], [1, 'Toothpaste']]
    }
  ]

  tests.forEach(function (test) {
    var args = JSON.stringify(test.param).slice(1, -1).replace(/,/g, ', ')
    var returnVal = JSON.stringify(test.expected).replace(/,/g, ', ')

    it('updateInventory(' + args + ') should return ' + returnVal + '.',
      function () {
        var result = updateInventory.apply(this, test.param)
        assert.deepStrictEqual(result, test.expected)
      }
    )
  })
})
