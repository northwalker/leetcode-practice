/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false;
  const s = x.toString();
  const n = s.length;
  const m = Math.ceil(n / 2);
  let i = 0;
  while (i <= n) {
    if (s.charAt(i) !== s.charAt(n - i - 1)) return false;
    i++;
  }
  return true;
};

// console.log(isPalindrome(121) === true);
// console.log(isPalindrome(-121) === false);
// console.log(isPalindrome(10) === false);
// console.log(isPalindrome(0) === true);

// const isPalindrome = function (x) {
//     const str = x.toString();
//     return str == str.split("").reverse().join(""); // 判斷 isPalindrome
// };
