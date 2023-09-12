/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  if (isNaN(num) || num > 3999 || num < 0) return false;

  const M = ['', 'M', 'MM', 'MMM'];
  const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  return (
    M[parseInt(num / 1000)] +
    C[parseInt((num % 1000) / 100)] +
    X[parseInt((num % 100) / 10)] +
    I[parseInt(num % 10)]
  );
};

// I    1
// V    5
// X    10
// L    50
// C    100
// D    500
// M    1000
console.log(intToRoman(3) === 'III');
console.log(intToRoman(58) === 'LVIII');
console.log(intToRoman(1994) === 'MCMXCIV');
