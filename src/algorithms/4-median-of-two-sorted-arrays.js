/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const nums = [];

  for (let i = 0, m = 0, n = 0; i < nums1.length + nums2.length; i++) {
    if (m < nums1.length && n < nums2.length) {
      if (nums1[m] < nums2[n]) {
        nums[i] = nums1[m];
        m++;
      } else {
        nums[i] = nums2[n];
        n++;
      }
    } else if (m < nums1.length) {
      nums[i] = nums1[m];
      m++;
    } else if (n < nums2.length) {
      nums[i] = nums2[n];
      n++;
    }
  }

  // console.log('nums', nums, nums.length);
  // if (nums.length % 2 === 0)
  //   console.log(nums[nums.length / 2], nums[Math.ceil(nums.length / 2) - 1]);
  // else console.log(nums[(nums.length - 1) / 2]);
  // console.log('------');

  if (nums.length % 2 === 0)
    return (nums[nums.length / 2] + nums[Math.ceil(nums.length / 2) - 1]) / 2;
  else return nums[(nums.length - 1) / 2];
};

// console.log(findMedianSortedArrays([1, 3], [2])); // 2
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
// console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
