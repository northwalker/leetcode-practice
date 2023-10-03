const selectionSort = function (arr, fn) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (fn(arr[j]) < fn(arr[minIndex])) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr; // For console.log, it's in-place sorting
};

console.log(JSON.stringify(selectionSort([5, 4, 1, 2, 3], (x) => x)));
console.log(
  JSON.stringify(selectionSort([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x))
);
console.log(
  JSON.stringify(
    selectionSort(
      [
        [3, 4],
        [5, 2],
        [10, 1],
      ],
      (x) => x[1]
    )
  )
);
console.log(JSON.stringify(selectionSort([], (x) => x)));
console.log(JSON.stringify(selectionSort([5], (x) => x)));
console.log(
  JSON.stringify(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1], (x) => x))
);
