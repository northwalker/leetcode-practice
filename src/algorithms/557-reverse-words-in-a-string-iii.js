/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  let sAry = s.split(' ');
  const rAry = sAry.map((word) => word.split('').reverse().join(''));
  return rAry.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords('God Ding'));
