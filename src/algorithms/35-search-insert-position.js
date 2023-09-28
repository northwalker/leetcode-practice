/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Solution 2 O(log n) // Binary Search
const searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
};

// Solution 1. O(n)
// const searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) return i;
//   }
//   return nums.length;
// };

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
