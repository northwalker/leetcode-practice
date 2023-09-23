/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x <= 1) return x;
  let start = 1,
    end = x;

  while (start <= end) {
    const mid = Number.parseInt(start + (end - start) / 2);
    if (mid * mid === x) return mid;
    else if (mid * mid > x) end = mid - 1;
    else start = mid + 1;
  }
  return end;
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(9)); // 3
console.log(mySqrt(0)); // 0
