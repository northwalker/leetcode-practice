/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  if (!s.length) return t;
  for (let i = 0; i < t.length; i++) {
    const c = t.charAt(i);
    const sIndex = s.indexOf(c);

    if (sIndex === -1) return c;
    else s = s.slice(0, sIndex) + s.slice(sIndex + 1);
  }
};

console.log(findTheDifference('abcd', 'abcde')); // e
console.log(findTheDifference('', 'y')); // y
console.log(findTheDifference('a', 'aa')); // a
