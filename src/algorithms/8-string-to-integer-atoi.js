/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  if (!s) return 0;
  let str = s.trim();
  const MAX_NUM = 2147483647; // Math.pow(2, 31) - 1;
  const MIN_NUM = -2147483648; // Math.pow(2, 31) * -1;

  const isNegitive = str.charAt(0) === '-';
  const shouldSliceFirstChar = isNegitive || str.charAt(0) === '+';
  if (shouldSliceFirstChar) str = str.slice(1);

  let ansStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).match(/[0-9]/)) ansStr += str.charAt(i);
    else break;
  }
  let ans = ansStr ? Number.parseInt(ansStr) : 0;
  if (isNegitive) {
    ans = ans * -1;
    return ans < MIN_NUM ? MIN_NUM : ans;
  }
  ans = ans * (isNegitive ? -1 : 1);

  return ans > MAX_NUM ? MAX_NUM : ans;
};

// console.log(myAtoi('42')); // 42
// console.log(myAtoi('    -42')); // -42
// console.log(myAtoi('4319 with word')); // 4319
// console.log(myAtoi('words and 987')); // 0
// console.log(myAtoi('-91283472332')); // -2147483648
// console.log(myAtoi('+1')); // 1

// const myAtoi = function (s) {
//   // Solution 1.
//   if (!s) return 0;
//   let str = s.trim();
//   const MAX_NUM = Math.pow(2, 31) - 1;
//   const MIN_NUM = Math.pow(2, 31) * -1;

//   const num = parseInt(str);
//   if (isNaN(num)) return 0;
//   else if (num > MAX_NUM) return MAX_NUM; // INT_MAX (2147483647)
//   else if (num <= MIN_NUM) return MIN_NUM; // INT_MIN (-2147483648)
//   else return num;
// };
