/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n, memo = []) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (memo[n] !== undefined) return memo[n];
  const result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  memo[n] = result;
  return result;
};

// Basically it's a fibonacci.
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
console.log(climbStairs(45)); // 8 // time limit exceeded issue with out memo
