# `secure-weighted-sample`

[![Build Status](https://travis-ci.org/emilbayes/secure-weighted-sample.svg?branch=master)](https://travis-ci.org/emilbayes/secure-weighted-sample)

> Weighted sampling using a secure RNG in O(n)

## Usage

```js
// Either approx sampling with percentage weights (imprecision stems from the passed weights)
var sample = require('secure-weighted-sample')
console.log(sample([0.1, 0.5, 0.2, 0.05, 0.15]))

// or exact sampling using integers
var sampleInteger = require('secure-weighted-sample/integer')
console.log(sampleInteger([8, 40, 16, 4, 6]))
```

## API

### `const idx = sample(weights)`

Approximate sampling using decimal percentage weights. Imprecision occurs if the
passed weights are not exactly representable in the double floating point
interval `[0, 1)`. Only performs a single sample from the RNG and does a linear
pass over the weights until the random number is less than the cumulative
weights. Hence `O(n)`.

Returns the index from the weights array, which can be used to index another
data array or used directly.

### `const idx = sampleInteger(integerWeights)`

Exact sampling using integer weights. The sum of weights must be less than
`Number.MAX_SAFE_INTEGER`. The RNG is sampled until a suitable candidate is
found. The expected number of samples is 2. If the sum of weights is a power of
2, only a single sample is needed. It then does a linear pass over the
weights until the random number is less than the cumulative weights.
Hence `O(n)`.

Returns the index from the weights array, which can be used to index another
data array or used directly.

## Install

```sh
npm install secure-weighted-sample
```

## License

[ISC](LICENSE)
