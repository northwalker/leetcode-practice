/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  let rows = new Array();
  for (let i = 0; i < rowIndex + 1; i++) {
    let row = new Array(i + 1);
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row[j] = 1;
      } else {
        row[j] = rows[i - 1][j - 1] + rows[i - 1][j];
      }
    }

    rows.push(row);
  }

  // console.log('rows', JSON.stringify(rows));
  // console.log('result', JSON.stringify(rows[rowIndex]));
  return rows[rowIndex];
};

// getRow(2); // [1, 2, 1]
// getRow(3); // [1, 3, 3, 1]
// getRow(0); // [1]
// getRow(1); // [1,1]
