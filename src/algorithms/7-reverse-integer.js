/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const maxNumber = Math.pow(2, 31) - 1;
  const isNegative = x < 0;
  const reverseNum = Number.parseInt(
    x.toString().replace('-', '').split('').reverse().join('')
  );
  const number = isNegative ? -1 * reverseNum : reverseNum;
  if (number > maxNumber || number < -1 * (maxNumber + 1)) return 0;
  return number;
};

console.log(reverse(123) === 321);
console.log(reverse(-321) === -123);
console.log(reverse(120) === 21);
console.log(reverse(1534236469) === 0);
