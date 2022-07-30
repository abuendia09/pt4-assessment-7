const perf = require('execution-time')();

function isUnique(str) {
    return new Set(str).size == str.length;
  }
  console.log(isUnique('Friday'));    
  console.log(isUnique('Fridayy'));

perf.start();
const isNotUnique = isUnique('It is not unique')
console.log(isNotUnique);
const resultUnique = perf.stop();
console.log('is unique result', resultUnique.preciseWords);

// runtime varies but it is average around 240.685 μs

