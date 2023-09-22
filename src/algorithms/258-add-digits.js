/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .reduce((prev, curr) => +prev + +curr, 0);
  }
  return num;
};

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0
console.log(addDigits(3)); // 3
console.log(addDigits(100)); // 1
console.log(addDigits(10)); // 1
