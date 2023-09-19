/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = function (mat, k) {
  let result = [];

  for (let i = 0; i < mat.length; i++) {
    const sNum = mat[i].filter((n) => n === 1).length;
    // console.log('sNum', i, sNum);
    result.push([sNum, i]);
  }
  result.sort((a, b) => a[0] - b[0]);
  //   console.log(
  //     'result',
  //     result.forEach((item) => console.log(item[0], item[1]))
  //   );
  return result.map((item) => item[1]).slice(0, k);
};

// kWeakestRows(
//   [
//     [1, 1, 0, 0, 0],
//     [1, 1, 1, 1, 0],
//     [1, 0, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [1, 1, 1, 1, 1],
//   ],
//   3
// );

// kWeakestRows(
//   [
//     [1, 0, 0, 0],
//     [1, 1, 1, 1],
//     [1, 0, 0, 0],
//     [1, 0, 0, 0],
//   ],
//   2
// );
