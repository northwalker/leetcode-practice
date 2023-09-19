/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) return [];

  let rowArray = [];
  for (let i = 0; i < rowsCount; i++) rowArray.push([]);

  for (let i = 0, currentCol = 1; i < this.length; i++) {
    if (currentCol % 2 === 0) rowArray[i % rowsCount].push(this[i]);
    else rowArray[rowsCount - (i % rowsCount) - 1].push(this[i]);

    // console.log('currentCol', currentCol, 'rowsCount', rowsCount);
    // rowArray.forEach((a) => {
    //   console.log(a.join('-'));
    // });

    if ((i + 1) % rowsCount === 0) currentCol++;
  }

  return rowArray;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

const arr = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
arr.snail(5, 4); // [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]]

// const arr = [1, 2, 3, 4];
// arr.snail(1, 4); // [[1,2,3,4]]

// const arr = [1, 3];
// arr.snail(2, 2); // []
