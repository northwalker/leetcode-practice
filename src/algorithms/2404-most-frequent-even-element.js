/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 === 0) {
      if (!map[num]) {
        map[num] = 1;
      } else {
        map[num] += 1;
      }
    }
  }
  // console.log(JSON.stringify(map));
  let result = null,
    resultFrequent = 0;
  Object.keys(map).forEach((key) => {
    if (result === null || map[key] > resultFrequent) {
      result = key;
      resultFrequent = map[key];
    }
  });
  console.log('result', result, resultFrequent);
  return result === null ? -1 : result;
};

mostFrequentEven([0, 1, 2, 2, 4, 4, 1]); // 2
mostFrequentEven([4, 4, 4, 9, 2, 4]); // 4
mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7]); // -1
