/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  let i = 1;
  while (i <= nums.length) {
    if (nums.indexOf(i) < 0) return i;
    else i++;
  }
  return i;
};

console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
console.log(firstMissingPositive([1])); // 2
