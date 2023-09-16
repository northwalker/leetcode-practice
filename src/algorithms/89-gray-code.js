/**
 * @param {number} n
 * @return {number[]}
 *
 * Reference and tips: http://bangbingsyb.blogspot.tw/2014/11/leetcode-gray-code.html
 * https://github.com/northwalker/LeetCode-JavaScript-2017/blob/master/algorithms/89-gray-code.js
 *
 */
const grayCode = function (n) {
  let result = [0];
  let increase = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = result.length - 1; j >= 0; j--) {
      result.push(result[j] + increase);
    }
    // console.log('result', result, 'increase', increase);
    increase = increase << 1;
  }
  return result;
};

console.log(grayCode(4));
// console.log(grayCode(3));
// console.log(grayCode(2));
// console.log(grayCode(1));
