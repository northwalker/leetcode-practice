/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    first = -1,
    last = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      left = mid;
      right = mid;
      break;
    }
  }

  if (left > right) return [-1, -1];

  while (nums[left - 1] === target) left--;
  while (nums[right + 1] === target) right++;

  // console.log([left, right]);
  return [left, right];
};
// searchRange([5, 7, 7, 8, 8, 10], 8); // [3, 4]
searchRange([5, 7, 7, 8, 8, 10], 6); // [-1, -1]
// searchRange([], 0); // [-1, -1]
// searchRange([1], 1); // [0, 0]

// O(n)
// const searchRange = function (nums, target) {
//   let first = -1,
//     last = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       if (first === -1) first = i;
//       else last = i;
//     }
//   }
//   return [first, last];
// };
