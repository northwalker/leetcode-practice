/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = function (target, n) {
  let result = [];
  let ptr = 0;
  for (let i = 1; i <= n; i++) {
    if (target[ptr] === i) {
      result.push('Push');
      ptr++;
    } else if (target[ptr] > i) {
      result.push('Push');
      result.push('Pop');
    }
  }
  // console.log('result', result);
  return result;
};

// buildArray([1, 3], 3); // ["Push","Push","Pop","Push"]
// buildArray([1, 2, 3], 3); // ["Push","Push","Push"]
// buildArray([1, 2], 4); // ["Push","Push"]
