/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = function (arr, fn) {
  // Solution 1.
  //   return arr.sort((a, b) => fn(a) - fn(b));
  //
  //
  // Solution 2. Merge sort
  //   const n = arr.length;
  //   if (n === 1) return arr;
  //
  //   const mid = Math.floor(n / 2);
  //   const arrLeft = arr.slice(0, mid);
  //   const arrRight = arr.slice(mid, n);
  //   return merge(sortBy(arrLeft, fn), sortBy(arrRight, fn), fn);
  //
  //
  // Solution 3. Quick Sort
  const quickSort = (arr, leftBound = 0, rightBound = arr.length - 1) => {
    if (leftBound < rightBound) {
      const pivotIndex = partition(arr, leftBound, rightBound);
      quickSort(arr, leftBound, pivotIndex - 1);
      quickSort(arr, pivotIndex, rightBound);
    }
    return arr;
  };

  const partition = (arr, left, right) => {
    const pivot = fn(arr[Math.floor((right + left) / 2)]);

    while (left <= right) {
      while (fn(arr[left]) < pivot) left++;
      while (fn(arr[right]) > pivot) right--;

      if (left <= right) {
        swap(arr, right, left);

        left++;
        right--;
      }
    }

    return left;
  };

  const swap = (arr, left, right) => {
    const temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
  };

  return quickSort(arr, 0, arr.length - 1);
};

/**
 * @param {Array} left
 * @param {Array} right
 * @param {Function} fn
 * @return {Array}
 */ // merge function
const merge = function (left, right, fn) {
  const sortedArray = [];
  while (left.length > 0 && right.length > 0) {
    // sort and merge
    if (fn(left[0]) < fn(right[0])) {
      sortedArray.push(left[0]);
      left.shift();
    } else {
      sortedArray.push(right[0]);
      right.shift();
    }
  }

  return sortedArray.concat(left, right);
};

// console.log(sortBy([5, 4, 1, 2, 3], (x) => x));
// console.log(
//   JSON.stringify(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x))
// );
// console.log(
//   JSON.stringify(
//     sortBy(
//       [
//         [3, 4],
//         [5, 2],
//         [10, 1],
//       ],
//       (x) => x[1]
//     )
//   )
// );
