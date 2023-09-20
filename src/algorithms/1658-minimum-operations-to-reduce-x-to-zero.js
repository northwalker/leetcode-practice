/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

// Solution Sliding Window
const minOperations = function (nums, x) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const target = sum - x;

  if (target < 0) return -1;
  if (!target) return nums.length;

  let start = 0,
    runningSum = 0,
    maxLen = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    while (runningSum > target) {
      runningSum -= nums[start];
      start++;
    }
    if (runningSum === target) {
      console.log('i', i, start);
      maxLen = Math.max(maxLen, i - start + 1);
    }
  }

  console.log('result', maxLen === -Infinity ? -1 : nums.length - maxLen);
  return maxLen === -Infinity ? -1 : nums.length - maxLen;
};

minOperations([1, 1, 4, 2, 3], 5); // 2
// minOperations([5, 6, 7, 8, 9], 4); // -1
// minOperations([3, 2, 20, 1, 1, 3], 10); // 5
// minOperations([1, 1], 3); // -1
// minOperations(
//   [
//     8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993,
//     9904, 8819, 1231, 6309,
//   ],
//   134365
// ); // 16
// minOperations(
//   [
//     5207, 5594, 477, 6938, 8010, 7606, 2356, 6349, 3970, 751, 5997, 6114, 9903,
//     3859, 6900, 7722, 2378, 1996, 8902, 228, 4461, 90, 7321, 7893, 4879, 9987,
//     1146, 8177, 1073, 7254, 5088, 402, 4266, 6443, 3084, 1403, 5357, 2565, 3470,
//     3639, 9468, 8932, 3119, 5839, 8008, 2712, 2735, 825, 4236, 3703, 2711, 530,
//     9630, 1521, 2174, 5027, 4833, 3483, 445, 8300, 3194, 8784, 279, 3097, 1491,
//     9864, 4992, 6164, 2043, 5364, 9192, 9649, 9944, 7230, 7224, 585, 3722, 5628,
//     4833, 8379, 3967, 5649, 2554, 5828, 4331, 3547, 7847, 5433, 3394, 4968,
//     9983, 3540, 9224, 6216, 9665, 8070, 31, 3555, 4198, 2626, 9553, 9724, 4503,
//     1951, 9980, 3975, 6025, 8928, 2952, 911, 3674, 6620, 3745, 6548, 4985, 5206,
//     5777, 1908, 6029, 2322, 2626, 2188, 5639,
//   ],
//   565610
// ); // 113
