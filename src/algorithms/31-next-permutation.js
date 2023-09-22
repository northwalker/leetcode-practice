/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

const reverse = (nums, start) => {
  let i = start,
    j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
};

// Approach 2: Single Pass Approach
const nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i < 0) return nums.reverse();

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);

    reverse(nums, i + 1);
  }

  // console.log('i', i, 'nums', nums);
  return nums;
};

nextPermutation([1, 2, 3]); // 1 3 2
nextPermutation([3, 2, 1]); // 1 2 3
nextPermutation([1, 1, 5]); // 1 5 1
nextPermutation([1, 3, 2]); // 2 1 3
