/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  let ans = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        ans.push([nums[i], nums[j], nums[k]]);

        while (j < k && nums[j] == nums[j + 1]) j++; // avoid duplicates
        while (j < k && nums[k] == nums[k - 1]) k--; // avoid duplicates

        j++;
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]).length);
console.log(threeSum([0, 1, 1]).length);
console.log(threeSum([0, 0, 0]).length);
console.log(threeSum([0, 0, 0, 0]).length);

// Time Limit Exceeded
// const threeSum = function (nums) {
//   let i = 0;
//   let ans = [];
//   let map = [];
//   while (i < nums.length) {
//     let j = i + 1;
//     while (j < nums.length) {
//       const diff = 0 - (nums[i] + nums[j]);
//       const k = nums.indexOf(diff);
//       if (k !== -1 && i !== j && j !== k && i !== k) {
//         const t = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//         // console.log('t', t.join(','), map.indexOf(t.join(',')));
//         if (map.indexOf(t.join(',')) === -1) {
//           // console.log('push', t.join(','));
//           ans.push(t);
//           map.push(t.join(','));
//         }
//       }

//       j++;
//     }
//     i++;
//   }
//   return ans;
// };
