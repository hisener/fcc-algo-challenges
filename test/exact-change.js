/* globals describe, it */

const assert = require('assert')
const checkCashRegister = require('../exact-change')

describe('Exact Change', function () {
  var tests = [
    {
      param: [19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10],
        ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00],
        ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]],
      expected: [['QUARTER', 0.50]]
    },
    {
      param: [3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10],
        ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00],
        ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]],
      expected: [['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15.00],
        ['ONE', 1.00], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04]]
    },
    {
      param: [19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0],
        ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0],
        ['ONE HUNDRED', 0]]],
      expected: 'Insufficient Funds'
    },
    {
      param: [19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0],
        ['QUARTER', 0], ['ONE', 1.00], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0],
        ['ONE HUNDRED', 0]]],
      expected: 'Insufficient Funds'
    },
    {
      param: [19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0],
        ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0],
        ['ONE HUNDRED', 0]]],
      expected: 'Closed'
    }
  ]

  tests.forEach(function (test) {
    var args = JSON.stringify(test.param).slice(1, -1).replace(/,/g, ', ')

    it('checkCashRegister(' + args + ') should return ' + JSON.stringify(test.expected) + '.',
      function () {
        var result = checkCashRegister.apply(this, test.param)
        assert.deepStrictEqual(result, test.expected)
      }
    )
  })
})
