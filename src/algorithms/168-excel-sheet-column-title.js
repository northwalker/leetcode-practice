/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  const ALPHA = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let result = [];
  while (columnNumber > 0) {
    columnNumber--;
    const char = ALPHA[columnNumber % 26];
    result.push(char);
    columnNumber = Math.floor(columnNumber / 26);
  }

  // console.log(result.reverse().join(''));
  return result.reverse().join('');
};

// convertToTitle(1); // A
// convertToTitle(28); // AB
// convertToTitle(701); // XY
// convertToTitle(2002); // BYZ
