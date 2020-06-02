const sample = require('.')
const sampleI = require('./integer')

const N = 10e6
const k = [0, 0, 0, 0, 0]
const ki = [0, 0, 0, 0, 0]

for (var i = 0; i < N; i++) {
  k[sample([0.1, 0.1, 0.2, 0.5, 0.1])]++
  ki[sampleI([8, 8, 16, 40, 8])]++
}

console.log(k)
console.log(ki)
console.log(k.map(w => w / N))
console.log(ki.map(w => w / N))
console.log(ki.reduce((w, s) => w + s, 0))
console.log(k.map(w => w / N).reduce((w, s) => w + s, 0))
console.log(ki.map(w => w / N).reduce((w, s) => w + s, 0))
