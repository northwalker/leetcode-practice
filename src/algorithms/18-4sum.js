/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  return kSum(nums, target, 0, 4);
};

const kSum = function (nums, target, start, k) {
  let result = [];
  if (start === nums.length) return result;

  const averageValue = target / k;
  if (nums[start] > averageValue || averageValue > nums[nums.length - 1]) {
    return result;
  }

  if (k == 2) {
    return twoSum(nums, target, start);
  }

  for (let i = start; i < nums.length; i++) {
    if (i === start || nums[i] !== nums[i - 1]) {
      kSum(nums, target - nums[i], i + 1, k - 1).map((set) => {
        set.push(nums[i]);
        result.push(set);
      });
    }
  }

  return result;
};

// 167 modified
const twoSum = function (nums, target, start = 0) {
  let result = [];
  let lo = start,
    hi = nums.length - 1;
  while (lo < hi) {
    const currSum = nums[lo] + nums[hi];
    if (currSum < target || (lo > start && nums[lo] === nums[lo - 1])) {
      lo++;
    } else if (
      currSum > target ||
      (hi < nums.length - 1 && nums[hi] === nums[hi + 1])
    ) {
      hi--;
    } else {
      result.push([nums[lo], nums[hi]]);
      // result.push([lo + 1, hi + 1]);
      lo++;
      hi--;
    }
  }
  return result;
};

// console.log(twoSum([2, 7, 11, 15], 9).join(''));
// console.log(twoSum([2, 3, 4], 6).join(''));
// console.log(twoSum([-1, 0], -1).join(''));

console.log(fourSum([1, 0, -1, 0, -2, 2], 0).join('-'));
console.log(fourSum([2, 2, 2, 2, 2], 8).join(''));
