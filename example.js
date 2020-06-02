// Either approx sampling with percentage weights (imprecision stems from the passed weights)
var sample = require('.')
console.log(sample([0.1, 0.5, 0.2, 0.05, 0.15]))

// or exact sampling using integers
var sampleInteger = require('./integer')
console.log(sampleInteger([8, 40, 16, 4, 6]))
