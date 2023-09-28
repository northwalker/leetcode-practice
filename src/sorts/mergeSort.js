const mergeSort = function (arr, fn) {
  const length = arr.length;
  if (!length || length === 1) return arr;

  const middle = Math.floor(length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);
  return merge(mergeSort(leftArray, fn), mergeSort(rightArray, fn), fn);
};

const merge = function (leftArray, rightArray, fn) {
  const sortedArray = [];
  while (leftArray.length || rightArray.length) {
    if (
      (leftArray.length && !rightArray.length) ||
      fn(leftArray[0]) <= fn(rightArray[0])
    ) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else if (
      (!leftArray.length && rightArray.length) ||
      fn(leftArray[0]) > fn(rightArray[0])
    ) {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  return sortedArray;
};

console.log(JSON.stringify(mergeSort([5, 4, 1, 2, 3], (x) => x)));
console.log(
  JSON.stringify(mergeSort([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x))
);
console.log(
  JSON.stringify(
    mergeSort(
      [
        [3, 4],
        [5, 2],
        [10, 1],
      ],
      (x) => x[1]
    )
  )
);
console.log(JSON.stringify(mergeSort([], (x) => x)));
console.log(JSON.stringify(mergeSort([5], (x) => x)));
console.log(JSON.stringify(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1], (x) => x)));
