/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
// Approach 1: Sort By Arrival Time
const eliminateMaximum = function (dist, speed) {
  let arrival = [];
  for (let i = 0; i < dist.length; i++) {
    arrival[i] = dist[i] / speed[i];
  }

  arrival.sort((a, b) => a - b);
  let ans = 0;

  // console.log(JSON.stringify(arrival));
  for (let i = 0; i < dist.length; i++) {
    if (arrival[i] <= i) break;
    else ans++;
  }

  // console.log(ans);
  return ans;
};

// eliminateMaximum([1, 3, 4], [1, 1, 1]); // 3
// eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1]); // 1
// eliminateMaximum([3, 2, 4], [5, 3, 2]); // 1
