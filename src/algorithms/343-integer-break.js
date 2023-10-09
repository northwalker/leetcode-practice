/**
 * @param {number} n
 * @return {number}
 */

// Approach 3: Mathematics
const integerBreak = function (n) {
  if (n <= 3) return n - 1;

  let ans = 1;
  while (n > 4) {
    ans *= 3;
    n -= 3;
  }
  return ans * n;
};

console.log(integerBreak(2)); // 1
console.log(integerBreak(3)); // 2
console.log(integerBreak(4)); // 4
console.log(integerBreak(5)); // 6 = 3 * 2
console.log(integerBreak(10)); // 36 = 3 * 3 * 4
console.log(integerBreak(15)); // 243 = 3 * 3 * 3 * 3 * 3

console.log(integerBreak(25)); // 8748 = 3 * 3 * 3 * 3 * 3 * 3 * 3 * 4
// 25 => 22 => 19 => 16 => 13 => 10...
