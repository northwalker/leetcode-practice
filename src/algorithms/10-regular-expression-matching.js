/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 *
 * Approach 1: Recursion
 *
 */
const isMatch = function (s, p) {
  if (!p?.length) return !s?.length;

  const isFirstMatch =
    !!s && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.');

  // console.log('isFirstMatch', isFirstMatch, s.charAt(0), p.charAt(0));
  if (p.length >= 2 && p.charAt(1) === '*') {
    return isMatch(s, p.slice(2)) || (isFirstMatch && isMatch(s.slice(1), p));
  }
  return isFirstMatch && isMatch(s.slice(1), p.slice(1));
};

// console.log(isMatch('aa', 'a') === false ? 'Pass' : 'Failed');
// console.log(isMatch('aa', 'a*') === true ? 'Pass' : 'Failed');
// console.log(isMatch('ab', '.*') === true ? 'Pass' : 'Failed');
// console.log(isMatch('abc', 'a***abc') === true ? 'Pass' : 'Failed');
// console.log(
//   isMatch('aaaccbccbcbaabcaa', 'c*a*.*a*.*c*.c*.a*c') === false
//     ? 'Pass'
//     : 'Failed'
// );

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  *
//  * Ref: https://leetcode.com/problems/regular-expression-matching/solutions/3913892/2-line/
//  *
//  */
// const isMatch = function (s, p) {
//   if (p.includes('**')) return true;
//   return !!s.match('^' + p + '$');
// };
