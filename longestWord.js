const perf = require('execution-time')();

function findLongestWord(stringArray){
    var longestWord = "";
    for (var i=0; i<stringArray.length; i++){
      if (stringArray[i].length > longestWord.length){
        longestWord = stringArray[i];
      }
    }
    return longestWord;
  };
  console.log(findLongestWord(['hello', 'hi']));

perf.start();
const longestWordRun = findLongestWord(['two', 'three', 'four','perfection'])
console.log(longestWordRun);
const resultLongestWord = perf.stop();
console.log('longest word result', resultLongestWord.preciseWords);

// runtime for the longest word is approx 184.045 μs