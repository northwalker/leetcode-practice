/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */

// Approach 3: Space-Optimized Dynamic Programming
const numWays = function (steps, arrLen) {
  const MOD = 1000000007;
  let dp,
    prevDp = new Array(arrLen).fill(0);
  prevDp[0] = 1;

  for (let remain = 1; remain <= steps; remain++) {
    dp = new Array(arrLen).fill(0);
    for (let curr = arrLen - 1; curr >= 0; curr--) {
      let ans = prevDp[curr];
      // console.log('curr', curr, 'ans', ans);
      if (curr > 0) {
        // console.log('curr > 0', 'ans+prevDp[curr - 1]', ans, prevDp[curr - 1]);
        ans = (ans + prevDp[curr - 1]) % MOD;
      }

      if (curr < arrLen - 1) {
        // console.log(
        //   'curr < arrLen-1',
        //   'ans+prevDp[curr + 1]',
        //   ans,
        //   prevDp[curr + 1]
        // );
        ans = (ans + prevDp[curr + 1]) % MOD;
      }

      dp[curr] = ans;
    }
    prevDp = dp;
  }

  // console.log(JSON.stringify(dp));
  return dp[0];
};

numWays(3, 2); // 4
// numWays(2, 4); // 2
// numWays(4, 2); // 8
// numWays(4, 3); // 9
