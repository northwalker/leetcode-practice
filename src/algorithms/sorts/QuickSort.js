// Solution 1: in-place
const QuickSort = function (arr, fn, left = 0, right = arr.length - 1) {
  if (left < 0 || left > right) return arr;

  if (right > left) {
    const pivotIndex = partition(arr, fn, left, right);
    // console.log('pivotIndex', pivotIndex, JSON.stringify(arr));
    QuickSort(arr, fn, left, pivotIndex - 1);
    QuickSort(arr, fn, pivotIndex + 1, right);
  }
  return arr;
};

// Lomuto partition scheme
const partition = function (arr, fn, left, right) {
  const pivot = fn(arr[right]); // Choose the last element as the pivot
  let storeIndex = left; // Temporary pivot index
  for (let i = left; i < right; i++) {
    if (fn(arr[i]) < pivot) {
      swap(arr, storeIndex, i);
      storeIndex++;
    }
  }

  swap(arr, storeIndex, right);
  return storeIndex; // privot index
};

const swap = function (arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

// // Solution 0:  NOT in-place
// const QuickSort = function (arr, fn) {
//   if (arr.length <= 1) return arr;

//   let leftArray = [],
//     rightArray = [];
//   const pivotIndex = Math.floor(arr.length / 2);
//   for (let i = 0; i < arr.length; i++) {
//     if (i === pivotIndex) continue;

//     if (fn(arr[i]) < fn(arr[pivotIndex])) leftArray.push(arr[i]);
//     else rightArray.push(arr[i]);
//   }
//   return QuickSort(leftArray, fn)
//     .concat(arr[pivotIndex])
//     .concat(QuickSort(rightArray, fn));
// };

console.log(JSON.stringify(QuickSort([5, 4, 1, 2, 3], (x) => x)));
console.log(
  JSON.stringify(QuickSort([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x))
);
console.log(
  JSON.stringify(
    QuickSort(
      [
        [3, 4],
        [5, 2],
        [10, 1],
      ],
      (x) => x[1]
    )
  )
);
console.log(JSON.stringify(QuickSort([], (x) => x)));
console.log(JSON.stringify(QuickSort([5], (x) => x)));
console.log(JSON.stringify(QuickSort([9, 8, 7, 6, 5, 4, 3, 2, 1], (x) => x)));
console.log(JSON.stringify(QuickSort([2, 3, 9, 5, 8, 7, 6, 1, 4], (x) => x)));
