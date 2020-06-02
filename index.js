const assert = require('nanoassert')
const rand = require('secure-random-double')

module.exports = function (weights) {
  assert(weights.reduce((w, s) => w + s, 0) === 1, 'Sum of weights must be 1')

  const r = rand()

  for (var i = 0, w = 0; i < weights.length; i++) {
    w += weights[i]
    if (r < w) return i
  }
}
