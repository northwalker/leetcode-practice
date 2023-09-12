/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0,
    n = s.length,
    subStr = '',
    ans = '';
  while (i < n && j < n) {
    if (subStr.indexOf(s.charAt(j)) < 0) {
      subStr += s.charAt(j);
      j++;
      if (ans?.length <= subStr?.length) ans = subStr;
    } else {
      subStr = s.charAt(i);
      i++;
      j = i;
    }
  }
  return ans.length;
};

console.log('abcabcbb', lengthOfLongestSubstring('abcabcbb') === 3);
console.log('bbbbbb', lengthOfLongestSubstring('bbbbbb') === 1);
console.log('pwwkew', lengthOfLongestSubstring('pwwkew') === 3);
console.log('s', lengthOfLongestSubstring('s') === 1);
console.log(' ', lengthOfLongestSubstring(' ') === 1);
console.log('aab', lengthOfLongestSubstring('aab') === 2);
console.log('dvdf', lengthOfLongestSubstring('dvdf') === 3);
console.log('asjrgapa', lengthOfLongestSubstring('asjrgapa') === 6);
console.log('jbpnbwwd', lengthOfLongestSubstring('jbpnbwwd') === 4);

// const lengthOfLongestSubstring = function (s) {
//   //
//   let temp = '',
//     ans = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       const c = s.charAt(j);
//       if (!temp.includes(c)) temp = temp + c;
//       else {
//         if (ans.length <= temp.length) ans = temp;

//         temp = '';
//         break;
//         console.log('repeat', c, ans, temp);
//       }
//     }
//   }

//   if (ans.length <= temp.length) ans = temp;

//   return ans?.length;
// };
