/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  // Tips: 把 nums1 當作夠長的陣列，從最後一個位置(m+n-1)開始挑大的數字放進nums1
  // 只要將 nums2 n個數字處理完畢，即完成。
  while (n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]
// merge([1], 1, [], 0); // [1]
// merge([0], 0, [1], 1); // [1]

// merge([2, 0], 1, [1], 1); // [1, 2]
// merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3); // [1,2,3,4,5,6]

// Init solution
// const merge = function (nums1, m, nums2, n) {
//   let i = 0,
//     j = 0;
//   while (m > 0 || n > 0 || i < nums1.length) {
//     if (m === 0 && n > 0) {
//       console.log('c1', m, n, nums1);
//       nums1[i] = nums2[j];
//       i++;
//       j++;
//       n--;
//     } else if (m > 0 && n === 0) {
//       console.log('c2', m, n, nums1);
//       i++;
//       m--;
//     } else if (m === 0 && n === 0) {
//       console.log('c3', i, nums1.length, m, n, nums1);
//       nums1.splice(i, 1);
//     } else if (nums1[i] > nums2[j]) {
//       console.log('c4', i, m, n, nums1);
//       if (i - 1 < 0) {
//         // first element
//         if (nums1[0] > nums2[j]) nums1.splice(0, 0, nums2[j]);
//         else nums1.splice(i, 0, nums2[j]);
//       } else {
//         if (nums1[i - 1] < nums2[j]) nums1.splice(i, 0, nums2[j]);
//         else nums1.splice(i - 1, 0, nums2[j]);
//       }
//       i++;
//       j++;
//       n--;
//     } else {
//       console.log('c5', m, n, nums1);
//       i++;
//       m--;
//     }
//   }
//   console.log(nums1);
// };
