/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let result = '1',
    tempResultString = '';
  let currentCharCount = 0,
    currentChar = '1';
  for (let i = 1; i < n; i++) {
    // console.log('i', i, 'current result', result);

    for (let j = 0; j < result.length; j++) {
      if (!currentChar) {
        currentChar = result.charAt(j);
        currentCharCount = 1;
      } else if (currentChar === result.charAt(j)) {
        currentCharCount++;
      } else if (currentChar !== result.charAt(j)) {
        tempResultString += `${currentCharCount}${currentChar}`;
        currentChar = result.charAt(j);
        currentCharCount = 1;
      }
      //   console.log('j', j, currentCharCount, currentChar, tempResultString);
    }

    if (currentCharCount && currentChar) {
      tempResultString += `${currentCharCount}${currentChar}`;
      currentChar = '';
      currentCharCount = 0;
    }

    result = tempResultString;
    tempResultString = '';
  }

  return result;
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
