/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + carry < 10) {
      digits[i] += carry;
      carry = 0;
    } else {
      digits[i] = (digits[i] + carry) % 10;
    }
  }
  if (carry) digits.splice(0, 0, carry);

  // console.log('digits', digits);
  return digits;
};

plusOne([1, 2, 3]);
plusOne([4, 3, 2, 1]);
plusOne([9]);
