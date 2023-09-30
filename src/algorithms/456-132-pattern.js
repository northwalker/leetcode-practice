/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution 4: Stack
const find132pattern = function (nums) {
  let min = [],
    stack = [];
  min[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    min[i] = Math.min(min[i - 1], nums[i]);
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] > min[j]) {
      while (stack.length && stack[stack.length - 1] <= min[j]) {
        stack.pop();
      }

      if (stack.length && stack[stack.length - 1] < nums[j]) {
        return true;
      }

      stack.push(nums[j]);
    }
  }
  return false;
};

// console.log(find132pattern([1, 2, 3, 4])); // false
// console.log(find132pattern([3, 1, 4, 2])); // true
// console.log(find132pattern([-1, 3, 2, 0])); // true
