/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *
 * Ref: https://skyyen999.gitbooks.io/-leetcode-with-javascript/content/questions/6md.html
 */
var convert = function (s, numRows) {
  if (s == null) return '';
  if (numRows == 1) return s;

  let numRowsArray = new Array(numRows).fill('');

  const step = 2 * numRows - 2; // 每一個字母排序回到第一列所要經過的次數

  for (let i = 0; i < s.length; i++) {
    const row = i % step;

    if (row < numRows) {
      // 此字母在ZigZag排序上是直線上的，直接加入 i%n 列
      numRowsArray[row] += s.charAt(i);
    } else {
      // 此字母在ZigZag排序上是斜線上的，加入公式 (2*numRows)-(i % step)-2
      const newRow = 2 * numRows - row - 2;
      numRowsArray[newRow] += s.charAt(i);
    }
  }

  // console.log(numRowsArray);
  return numRowsArray.join('');
};

console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR');
console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');
console.log(convert('A', 1) === 'A');
