const twoSum = function (nums, target) {
  // Hash Map ver.
  // 將每一個數字與 target 的差值加入 map 儲存，新的數字若相符即回傳
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (map.has(key)) return [map.get(key), i];
    else map.set(target - key, i);
  }
};

// var twoSum = function (nums, target) {
//   //  Brute Force ver.
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return null;
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
