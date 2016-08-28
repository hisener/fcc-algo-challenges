/* globals describe, it */

const assert = require('assert')
const orbitalPeriod = require('../map-the-debris')

describe('Map the Debris', function () {
  var tests = [
    { param: [{name: 'sputnik', avgAlt: 35873.5553}],
      expected: [{name: 'sputnik', orbitalPeriod: 86400}]
    },
    { param: [{name: 'iss', avgAlt: 413.6}, {name: 'hubble', avgAlt: 556.7},
        {name: 'moon', avgAlt: 378632.553}],
      expected: [{name: 'iss', orbitalPeriod: 5557},
        {name: 'hubble', orbitalPeriod: 5734},
        {name: 'moon', orbitalPeriod: 2377399}]
    }
  ]

  tests.forEach(function (test) {
    var args = JSON.stringify(test.param).replace(/,/g, ', ')
    var returnVal = JSON.stringify(test.expected).replace(/,/g, ', ')

    it('orbitalPeriod(' + args + ') should return ' + returnVal + '.',
      function () {
        var result = orbitalPeriod(test.param)
        assert.deepStrictEqual(result, test.expected)
      }
    )
  })
})
