/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s
    .trim()
    .split(' ')
    .reverse()
    .filter((word) => !!word)
    .join(' ');
};

reverseWords('the sky is blue'); // "blue is sky the"
reverseWords('  hello world  '); // "world hello"
reverseWords('a good   example'); // "example good a"
