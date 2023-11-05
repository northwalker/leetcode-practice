/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const getWinner = function (arr, k) {
  if (k === 1) return Math.max(arr[0], arr[1]);
  if (k > arr.length) return Math.max(...arr);

  let currentWinner = arr[0];
  let consecutiveWins = 0;
  for (let i = 1; i < arr.length; i++) {
    if (currentWinner > arr[i]) consecutiveWins++;
    else {
      currentWinner = arr[i];
      consecutiveWins = 1;
    }

    if (consecutiveWins === k) return currentWinner;
  }

  return currentWinner;
};

// console.log(getWinner([2, 1, 3, 5, 4, 6, 7], 2)); // 5
// console.log(getWinner([3, 2, 1], 10)); // 3
// console.log(getWinner([1, 25, 35, 42, 68, 70], 1)); // 25
