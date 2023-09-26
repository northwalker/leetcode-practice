/**
 * @param {string} s
 * @return {string}
 */
// As same as problem 316
const smallestSubsequence = function (s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (result.includes(c)) continue;

    while (
      result.length > 0 &&
      result.slice(-1) > c &&
      s.indexOf(result.slice(-1), i) > i
    ) {
      result = result.slice(0, -1);
    }
    result += c;
  }

  return result;
};
