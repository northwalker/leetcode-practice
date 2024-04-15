/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n, memo = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (!memo[n]) memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(20)); // 6765
console.log(fib(30)); // 832040
console.log(fib(40)); // 102334155
console.log(fib(45)); // 1134903170
console.log(fib(50)); // 12586269025
console.log(fib(100)); // 354224848179262000000
