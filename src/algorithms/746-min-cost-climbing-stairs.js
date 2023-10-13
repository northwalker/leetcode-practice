/**
 * @param {number[]} cost
 * @return {number}
 */

// Bottom-Up
const minCostClimbingStairs = function (cost) {
  const dp = new Array(cost.length);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  // console.log('dp', dp);
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};

// Hint
// const minCostClimbingStairs = function (cost) {
//
/**
 * Build an array dp where dp[i] is the minimum cost to climb to the top starting from the ith staircase.
 * Assuming we have n staircase labeled from 0 to n - 1 and assuming the top is n, then dp[n] = 0, marking that if you are at the top, the cost is 0.
 * Now, looping from n - 1 to 0, the dp[i] = cost[i] + min(dp[i + 1], dp[i + 2]). The answer will be the minimum of dp[0] and dp[1]
 */
//   const dp = new Array(cost.length).fill(0);
//   for (let i = cost.length - 1; i >= 0; i--) {
//     dp[i] = cost[i] + Math.min(dp[i + 1] || 0, dp[i + 2] || 0);
//   }
//   // console.log('dp', dp);
//   return Math.min(dp[0], dp[1]);
// };

minCostClimbingStairs([10, 15, 20]);
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
