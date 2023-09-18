/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = [];
  while (columnNumber > 0) {
    const char = ALPHA[(columnNumber - 1) % 26];
    result.push(char);
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  // console.log(result.reverse().join(''));
  return result.reverse().join('');
};

convertToTitle(1); // A
convertToTitle(28); // AB
convertToTitle(701); // XY
convertToTitle(2002); // BYZ
