/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n, memo = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  if (!memo[n])
    memo[n] =
      tribonacci(n - 1, memo) +
      tribonacci(n - 2, memo) +
      tribonacci(n - 3, memo);
  return memo[n];
};

// console.log(tribonacci(0)); // 0
// console.log(tribonacci(1)); // 1
// console.log(tribonacci(2)); // 1
// console.log(tribonacci(3)); // 2
// console.log(tribonacci(4)); // 4

// console.log(tribonacci(10)); // 149
// console.log(tribonacci(20)); // 66012
// console.log(tribonacci(30)); // 29249425
// console.log(tribonacci(40)); // 12960201916
// console.log(tribonacci(50)); // 5742568741225
// console.log(tribonacci(60)); // 2544489349890656
