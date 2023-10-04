/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  // Solution 1:
  // nums.sort((a, b) => a - b);
  //
  // Solution 2:
  //
  const length = nums.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
};

sortColors([2, 0, 2, 1, 1, 0]);
sortColors([2, 0, 1]);
