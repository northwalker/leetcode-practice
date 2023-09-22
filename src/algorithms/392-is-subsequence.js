/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  if (t.length < s.length) return false;
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s.charAt(i) === t.charAt(j)) {
      i++;
    }
    j++;
  }
  // console.log(i, j);
  return i === s.length;
};

// console.log(isSubsequence('abc', 'ahbgdc')); // true
// console.log(isSubsequence('axc', 'ahbgdc')); // false
// console.log(isSubsequence('ab', 'baab')); // true
// console.log(
//   isSubsequence(
//     'twn',
//     'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn'
//   )
// ); // true
// console.log(isSubsequence('b', 'c')); // false
// console.log(isSubsequence('', 'ahbgdc')); // true
// console.log(isSubsequence('', '')); // true
// console.log(isSubsequence('aaaaaa', 'bbaaaa')); // false
