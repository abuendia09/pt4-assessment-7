const perf = require('execution-time')();

function isPangram(string) {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvxyz'.split('');
 
    for (let i = 0; i < alphabet.length; i++){
        if (strArr.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true
}
console.log(isPangram('not a pangram'));
console.log(isPangram('The five boxing wizards jump quickly.'));

perf.start();
const pangramRun = isPangram('Two driven jocks help fax my big quiz');
console.log(pangramRun);
const resultPangram  = perf.stop()
console.log('is pangram', resultPangram.preciseWords);

//the runtime for is pangram varies but one was 211.288 μs