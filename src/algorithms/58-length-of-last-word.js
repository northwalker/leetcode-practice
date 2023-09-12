/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const strs = s.trim().split(' ');
  return strs[strs.length - 1].length;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));
