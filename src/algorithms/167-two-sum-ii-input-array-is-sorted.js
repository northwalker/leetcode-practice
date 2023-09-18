/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Solution 2.
const twoSum = function (nums, target, start = 0) {
  let result = [];
  let lo = start,
    hi = nums.length - 1;
  while (lo < hi) {
    const currSum = nums[lo] + nums[hi];
    // console.log('currSum', currSum, lo, hi);
    if (currSum < target || (lo > start && nums[lo] === nums[lo - 1])) {
      lo++;
    } else if (
      currSum > target ||
      (hi < nums.length - 1 && nums[hi] === nums[hi + 1])
    ) {
      hi--;
    } else {
      // console.log('re', [lo+1, hi+1])
      return [lo + 1, hi + 1];
      lo++;
      hi--;
    }
  }
};

// Solution 1.
// const twoSum = function (numbers, target) {
//   let left = 0,
//     right = numbers.length - 1;
//   while (left < right) {
//     if (numbers[left] + numbers[right] > target) right--;
//     else if (numbers[left] + numbers[right] < target) left++;
//     else return [left + 1, right + 1];
//   }
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
