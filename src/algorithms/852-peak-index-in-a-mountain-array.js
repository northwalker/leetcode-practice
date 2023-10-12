/**
 * @param {number[]} arr
 * @return {number}
 */

// Approach 2: Binary Search
const peakIndexInMountainArray = function (arr) {
  let left = 0,
    right = arr.length - 1,
    mid = null;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else right = mid;
  }
  return left;
};

// Approach 1: Linear Scan
// const peakIndexInMountainArray = function (arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) return i;
//   }
// };

console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1
console.log(peakIndexInMountainArray([3, 4, 5, 1])); // 2
