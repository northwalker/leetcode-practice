/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let m = a.length - 1;
  let n = b.length - 1;
  let carry = 0;
  let result = '';
  while (m >= 0 || n >= 0 || carry === 1) {
    let x = a[m] ? Number(a[m]) : 0;
    let y = b[n] ? Number(b[n]) : 0;
    result = (x ^ y ^ carry) + result;
    carry = x + y + carry > 1 ? 1 : 0;

    m--;
    n--;
  }
  return result;
};

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
console.log(addBinary('0', '1'));
console.log(addBinary('1', '111'));
