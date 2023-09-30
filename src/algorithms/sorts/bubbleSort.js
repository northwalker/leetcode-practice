const bubbleSort = function (arr, fn) {
  let temp = null;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (fn(arr[j]) > fn(arr[j + 1])) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // For console.log, it's in-place sorting
};

// console.log(JSON.stringify(bubbleSort([5, 4, 1, 2, 3], (x) => x)));
// console.log(
//   JSON.stringify(bubbleSort([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x))
// );
// console.log(
//   JSON.stringify(
//     bubbleSort(
//       [
//         [3, 4],
//         [5, 2],
//         [10, 1],
//       ],
//       (x) => x[1]
//     )
//   )
// );
// console.log(JSON.stringify(bubbleSort([], (x) => x)));
// console.log(JSON.stringify(bubbleSort([5], (x) => x)));
// console.log(JSON.stringify(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1], (x) => x)));
