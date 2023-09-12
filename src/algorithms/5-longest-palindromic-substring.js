/**
 * @param {string} s
 * @return {string}
 */
// Approach 3 Expand From Centers
const longestPalindrome = (s) => {
  const expandAroundCenter = (s, left, right) => {
    let L = left,
      R = right;
    while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
      L--;
      R++;
    }
    // console.log('expandAroundCenter', left, right, s.substring(R, L));
    return R - L - 1;
  };

  let ans = [0, 0];
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i); // odd length
    if (len1 > ans[1] - ans[0] + 1) {
      const dist = Math.floor(len1 / 2);
      ans = [i - dist, i + dist];
      // console.log('i', i, 'len1', len1, 'dist', dist);
    }

    const len2 = expandAroundCenter(s, i, i + 1); // even length
    if (len2 >= ans[1] - ans[0] + 1) {
      const dist = Math.floor(len2 / 2 - 1);
      ans = [i - dist, i + 1 + dist];
      // console.log('i', i, 'len2', len2, 'dist', dist);
    }

    // console.log('i', i, 'len1', len1, 'len2', len2);
  }

  // console.log('ans', ans, s.substring(ans[0], ans[1] + 1));
  return s.substring(ans[0], ans[1] + 1);
};

console.log('babad', longestPalindrome('babad') === 'bab');
console.log('cbbd', longestPalindrome('cbbd') === 'bb');
console.log('bbbbb', longestPalindrome('bbbbb') === 'bbbbb');
console.log('aaaa', longestPalindrome('aaaa') === 'aaaa');
console.log('caba', longestPalindrome('caba') === 'aba');

// // Approach 1 Check All Substrings
// const longestPalindrome = function (s) {
//   if (!s) return '';

//   const isPalindrome = function (s) {
//     const l = s.length;
//     const n = Math.ceil(s.length / 2);
//     for (let i = 0; i <= n; i++) {
//       if (s.charAt(i) !== s.charAt(l - i - 1)) return false;
//     }
//     return true;
//   };

//   let ans = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = s.length; j > i; j--) {
//       const subStr = s.slice(i, j);
//       if (isPalindrome(subStr) && subStr.length > ans.length) ans = subStr;
//       // console.log('subStr', subStr, 'ans', ans);
//     }
//   }

//   return ans;
// };
