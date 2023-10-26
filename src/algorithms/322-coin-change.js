/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  coins.sort((a, b) => a - b);
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const c = coins[j];
      if (i - c >= 0) {
        console.log(i, i - c, dp[i], dp[i - c] + 1);
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
  }

  console.log(dp);
  console.log('result', dp[amount] === Infinity ? -1 : dp[amount]);
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// coinChange([1, 2, 5], 11); // 3 // 11 = 5 + 5 + 1
// coinChange([2], 3); // -1
// coinChange([1], 0); // 0
