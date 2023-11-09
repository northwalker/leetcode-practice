/**
 * @param {string} s
 * @return {number}
 */
// Approach: Counting Streaks
const countHomogenous = function (s) {
  const MOD = 1000000007;
  let ans = 0,
    currStreak = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i] === s[i - 1]) {
      currStreak++;
    } else {
      currStreak = 1;
    }
    ans = (ans + currStreak) % MOD;
  }

  // console.log(ans);
  return ans;
};

countHomogenous('abbcccaa'); // 13
countHomogenous('xy'); // 2
countHomogenous('zzzzz'); //15
