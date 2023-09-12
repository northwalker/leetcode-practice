/**
 * @param {string} s
 * @return {boolean}
 */
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

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('{[]}'));
console.log(isValid('(){}}{'));
