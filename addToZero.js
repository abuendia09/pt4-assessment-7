const perf = require('execution-time')();

function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j + 1] === 0){
                return true
            }
        }        
    }
    return false
}     
perf.start();                     
const result = addToZero([2, 1, 3, 5, -1, 4, 6, 8]);
console.log(result);
const resultsAddToZero = perf.stop();
console.log("add to zero", resultsAddToZero.preciseWords);

// add to zero took 11.662535 ms
