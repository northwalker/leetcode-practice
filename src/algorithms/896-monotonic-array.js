/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
  let increasing = [],
    decreasing = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] - nums[i + 1] < 0) decreasing.push(nums[i]);
    else if (nums[i] - nums[i + 1] > 0) increasing.push(nums[i]);

    if (increasing.length && decreasing.length) return false;
  }
  return true;
};
