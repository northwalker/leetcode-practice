/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  // Solution 1
  // return s.reverse();

  // Solution 2
  let temp = '';
  for (let i = 0; i < s.length / 2; i++) {
    temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
  console.log('s', s.join(''));
};

reverseString(['h', 'e', 'l', 'l', 'o']);
reverseString(['H', 'a', 'n', 'n', 'a', 'h']);
reverseString([
  'A',
  ' ',
  'm',
  'a',
  'n',
  ',',
  ' ',
  'a',
  ' ',
  'p',
  'l',
  'a',
  'n',
  ',',
  ' ',
  'a',
  ' ',
  'c',
  'a',
  'n',
  'a',
  'l',
  ':',
  ' ',
  'P',
  'a',
  'n',
  'a',
  'm',
  'a',
]);
