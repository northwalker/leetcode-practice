/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
// Approach 3: Simpler Binary Search
const fullBloomFlowers = function (flowers, people) {
  const starts = flowers.map((item) => item[0]).sort((a, b) => a - b);
  const ends = flowers.map((item) => Number(item[1]) + 1).sort((a, b) => a - b);

  const ans = new Array(people.length).fill(0);

  for (let index = 0; index < people.length; index++) {
    const person = people[index];
    let i = binarySearch(starts, person);
    let j = binarySearch(ends, person);

    ans[index] = i - j;
  }

  console.log(JSON.stringify(ans));
  return ans;
};

const binarySearch = function (arr, target) {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (target < arr[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

// Time Limit Exceeded
// Approach 1: Heap/Priority Queue
// const fullBloomFlowers = function (flowers, people) {
//   flowers.sort((a, b) => a[0] - b[0]);
//   const sortedPeople = people.slice().sort((a, b) => a - b);
//   let dic = {};
//   let heap = [];
//   for (let p = 0; p < sortedPeople.length; p++) {
//     const person = sortedPeople[p];
//     let i = 0;
//     while (i < flowers.length && flowers[i][0] <= person) {
//       heap.push(flowers[i][1]);
//       i++;
//     }

//     heap.sort((a, b) => a - b);
//     while (heap.length && heap[0] < person) {
//       heap.shift();
//     }
//     console.log('heap', person, heap);
//     dic[person] = heap.length;
//     heap = [];
//   }

//   let result = people.map((key) => dic[key]);
//   // console.log(JSON.stringify(result));
//   return result;
// };

fullBloomFlowers(
  [
    [1, 6],
    [3, 7],
    [9, 12],
    [4, 13],
  ],
  [2, 3, 7, 11]
); // [1,2,2,2]
fullBloomFlowers(
  [
    [1, 10],
    [3, 3],
  ],
  [3, 3, 2]
); // [2,2,1]
fullBloomFlowers(
  [
    [19, 37],
    [19, 38],
    [19, 35],
  ],
  [6, 7, 21, 1, 13, 37, 5, 37, 46, 43]
); // [0,0,3,0,0,2,0,2,0,0]
