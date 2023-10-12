const binarySerach = function (arr, target) {
  // pre-sort
  // arr.sort((a, b) => a - b);

  let left = 0,
    right = arr.length - 1,
    mid = null;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else right = mid;
  }

  // const index = arr[left] === target ? left : -1;
  // console.log(index);

  return arr[left] === target ? left : -1;
};

binarySerach([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8); // 8
binarySerach([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 11); // -1
binarySerach([1, 3, 4, 7, 8, 9, 11, 19, 22], 11); // 6
binarySerach([1, 3, 4, 7, 8, 9, 11, 19, 22], 1); // 0
