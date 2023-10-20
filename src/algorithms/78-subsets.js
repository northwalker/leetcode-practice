/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  let result = [[]];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const currLen = result.length;
    for (let j = 0; j < currLen; j++) {
      const item = result[j];
      result.push(item.concat(num));
    }
  }

  // console.log(JSON.stringify(result));
  return result;
};

// subsets([1, 2, 3]); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// subsets([0]); // [[], [0]];
