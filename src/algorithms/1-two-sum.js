var twoSum = function (nums, target) {
  // Hash Map ver.
  // 將每一個數字與target的差值加入map儲存，新的數字若相符即回傳
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] || map[nums[i]] === 0) return [map[nums[i]], i];
    else map[target - nums[i]] = i;
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
