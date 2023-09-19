/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function (arr, size) {
  let result = [];
  for (i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// Solution 1.
// const chunk = function (arr, size) {
//   let result = [],
//     temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (temp.length < size) {
//       temp.push(arr[i]);
//     }

//     if (temp.length === size) {
//       result.push(temp);
//       temp = [];
//     }
//   }
//   if (temp.length) result.push(temp);

//   return result;
// };
