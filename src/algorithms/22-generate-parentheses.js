/**
 * @param {number} n
 * @return {string[]}
 */

// 20-valid-parentheses.js
const isValid = function (s) {
  const pairLeft = ['(', '{', '['];
  const pairRight = [')', '}', ']'];

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // console.log('i', i, stack, s[i]);

    if (pairLeft.indexOf(s[i]) > -1) stack.push(s[i]);
    else if (pairRight.indexOf(s[i]) > -1) {
      if (pairLeft.indexOf(stack.pop()) !== pairRight.indexOf(s[i]))
        return false;
    } else return false;
  }
  return stack.length === 0;
};

const generateParenthesis = function (n) {
  let result = [];
  for (let i = 0; i < 2 * n; i++) {
    const tempA = result.length ? result.map((c) => (c += '(')) : ['('];
    const tempB = result.length ? result.map((c) => (c += ')')) : [')'];
    result = tempA.concat(tempB);
    // console.log('tempA', tempA);
    // console.log('tempB', tempB);
    // console.log('i result', i, result);
  }

  return result.filter((s) => isValid(s));
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
