/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  return Math.sqrt(num) % 1 === 0;
};

console.log(isPerfectSquare(4));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
