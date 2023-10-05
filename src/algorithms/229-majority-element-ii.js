/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  const n = Math.floor(nums.length / 3);
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }
  // console.log(JSON.stringify(map));
  const result = Object.keys(map).filter((key) => map[key] > n);
  // console.log(result);
  return result;
};

majorityElement([3, 2, 3]); // [3]
majorityElement([1]); // [1]
majorityElement([1, 2]); // [1, 2]
