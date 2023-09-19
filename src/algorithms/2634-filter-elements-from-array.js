/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
  let result = [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result[j] = arr[i];
      j++;
    }
  }
  return result;
};
