/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  let rows = new Array();
  for (let i = 0; i < numRows; i++) {
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
  return rows;
};

// generate(3); // [[1],[1,1],[1,2,1]
// generate(5); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// generate(1); // [[1]]
