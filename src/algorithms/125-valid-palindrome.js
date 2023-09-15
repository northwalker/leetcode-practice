/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  str = s.replace(/[^A-Za-z0-9]/g, '');
  const n = str.length;
  const m = str.length / 2;
  let i = 0;
  while (i <= m) {
    if (str.charAt(i).toUpperCase() !== str.charAt(n - i - 1).toUpperCase())
      return false;

    i++;
  }
  return true;
};

// // Solution 1.
// // =====================================
// const isPalindrome = function (s) {
//   var ss = s.toLowerCase().replace(/[^a-z0-9]/g, '');
//   return ss === ss.split('').reverse().join('');
// };

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
// console.log(isPalindrome(' '));
// console.log(isPalindrome('0P'));
