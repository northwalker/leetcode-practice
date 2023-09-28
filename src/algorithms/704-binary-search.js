/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let i = 0;
  j = nums.length;
  while (i <= j) {
    index = Math.floor((i + j) / 2);
    if (nums[index] === target) return index;
    else if (nums[index] > target) {
      j = index - 1;
    } else {
      i = index + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
