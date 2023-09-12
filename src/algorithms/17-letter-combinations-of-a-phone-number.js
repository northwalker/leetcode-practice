/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits.length) return [];

  const KEYS = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  let result = [];
  for (let i = 0; i < digits.length; i++) {
    let d = digits[i];
    let tempResult = [];

    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < KEYS[d].length; k++) {
        tempResult.push(result[j] + KEYS[d][k]);
      }
    }

    if (!result.length) tempResult = KEYS[d].split('');

    result = tempResult;
  }

  return result;
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));
