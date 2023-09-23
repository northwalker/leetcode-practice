/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

// Solution 1:
// const flat = (arr, n) => arr.flat(n);

// Solution 2:
const flat = function (arr, n) {
  let result = arr,
    temp = [];
  for (let i = 0; i < n; i++) {
    result.forEach((item) => {
      if (Array.isArray(item)) {
        item.forEach((item1) => {
          temp.push(item1);
        });
      } else {
        temp.push(item);
      }
    });
    result = temp;
    temp = [];
  }
  return result;
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)
); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
); //
console.log(
  flat(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    2
  )
); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
