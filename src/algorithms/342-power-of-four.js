/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
  let num = 4;
  while (num < n) num *= 4;

  if (num === n || n === 1) return true;
  return false;
};

console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(1)); // true
