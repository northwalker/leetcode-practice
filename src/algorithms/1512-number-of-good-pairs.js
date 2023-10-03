/**
 * @param {number[]} nums
 * @return {number}
 */
// Time O(N) Space O(N)
const numIdenticalPairs = function (nums) {
  let map = {},
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (!map[key]) {
      map[key] = 1;
    } else {
      count += map[key];
      map[key] += 1;
    }
  }
  // console.log('count', count);
  return count;
};

// Time O(N^2) Space O(1)
// const numIdenticalPairs = function (nums) {
//   let result = [];
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) result.push([i, j]);
//     }
//   }

//   console.log(result.length, JSON.stringify(result));
//   return result.length;
// };

// numIdenticalPairs([1, 2, 3, 1, 1, 3]);
numIdenticalPairs([1, 1, 1, 1]);
// numIdenticalPairs([1, 2, 3]);
