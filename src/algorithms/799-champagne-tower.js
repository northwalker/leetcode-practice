/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
const champagneTower = function (poured, query_row, query_glass) {
  let A = new Array(query_row + 1)
    .fill(0)
    .map(() => new Array(query_row + 1).fill(0));
  A[0][0] = poured;

  for (let i = 0; i < query_row; i++) {
    for (let j = 0; j <= i; j++) {
      const q = (A[i][j] - 1) / 2;
      if (q > 0) {
        A[i + 1][j] += q;
        A[i + 1][j + 1] += q;
      }
    }
  }

  // A.forEach((row) => console.log(row));
  return Math.min(1, A[query_row][query_glass]);
};

// console.log(champagneTower(1, 1, 1)); // 1
// console.log(champagneTower(2, 1, 1)); // 0.5
// console.log(champagneTower(100000009, 33, 17)); // 1
// console.log(champagneTower(25, 6, 1)); // 0.18750
