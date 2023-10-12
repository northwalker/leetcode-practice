/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let i = 0,
    k = 0,
    current = null,
    count = 0;
  while (i < nums.length && nums[i] !== '_') {
    if (nums[i] !== current) {
      current = nums[i];
      count = 1;
      i++;
      k++;
    } else if (nums[i] === current && count < 2) {
      count++;
      k++;
      i++;
    } else if (nums[i] === current && count === 2) {
      nums.push('_');
      nums.splice(i, 1);
    }
  }

  // console.log('k', k, 'nums', nums);
  return k;
};

removeDuplicates([1, 1, 1, 2, 2, 3]); // k = 5, [1,1,2,2,3,_]
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]); // k = 7, [0,0,1,1,2,3,3,_,_]
