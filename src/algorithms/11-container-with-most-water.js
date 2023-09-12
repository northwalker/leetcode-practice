/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let ans = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    // console.log('i,j', i, j, height[i], height[j], 'ans', ans);

    // 從比較大的那邊開始縮，找看看有沒有更大的面積（寬度只會越來越短）
    if (height[i] < height[j]) {
      i++;
    } else if (height[i] > height[j]) {
      j--;
    } else {
      // 兩邊一樣的話，一起內縮
      i++;
      j--;
    }
  }

  return ans;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
