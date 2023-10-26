/**
 * @param {number[]} arr
 * @return {number}
 */
const numFactoredBinaryTrees = function (arr) {
  const MOD = 1000000007;
  const dp = {};
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) dp[arr[i]] = 1;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const num2 = arr[j];
      if (num2 > Math.sqrt(num)) break;
      if (num % num2 === 0 && arr.indexOf(num / num2) !== -1) {
        dp[num] +=
          num / num2 === num2
            ? dp[num2] * dp[num2]
            : dp[num2] * dp[num / num2] * 2;
        dp[num] %= MOD;
      }
    }
  }
  const result = Object.values(dp).reduce((acct, value) => {
    return (acct + value) % MOD;
  }, 0);
  return result;
};
