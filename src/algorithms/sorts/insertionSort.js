const insertionSort = function (arr, fn) {
  let key = null;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    let j = i - 1;
    while (j >= 0 && fn(arr[j]) > fn(key)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr; // For console.log, it's in-place sorting
};

// console.log(JSON.stringify(insertionSort([5, 4, 1, 2, 3], (x) => x)));
// console.log(
//   JSON.stringify(insertionSort([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x))
// );
// console.log(
//   JSON.stringify(
//     insertionSort(
//       [
//         [3, 4],
//         [5, 2],
//         [10, 1],
//       ],
//       (x) => x[1]
//     )
//   )
// );
// console.log(JSON.stringify(insertionSort([], (x) => x)));
// console.log(JSON.stringify(insertionSort([5], (x) => x)));
// console.log(
//   JSON.stringify(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1], (x) => x))
// );
