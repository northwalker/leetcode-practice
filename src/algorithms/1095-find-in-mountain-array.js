/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

// For testing
Array.prototype.get = function (index) {
  return this[index];
};
// For testing
Array.prototype.lengthFunc = function (index) {
  return this.length;
};

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
const findInMountainArray = function (target, mountainArr) {
  const length = mountainArr.lengthFunc();

  // 1. Find the index of the peak element
  // Binary Search
  let left = 1,
    right = length - 2;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    console.log('1. mid', left, right, mid);
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  console.log('1. left', left);
  const peakIndex = left;

  // 2. Search in the strictly increasing part of the array
  left = 0;
  right = peakIndex;
  while (left !== right) {
    const mid = Math.floor((left + right) / 2);
    console.log('2. mid', left, right, mid);
    if (mountainArr.get(mid) < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  console.log('2. left', left);
  // Check if the target is present in the strictly increasing part
  if (mountainArr.get(left) === target) {
    return left;
  }

  // 3. Otherwise, search in the strictly decreasing part
  left = peakIndex + 1;
  right = length - 1;
  while (left !== right) {
    const mid = Math.floor((left + right) / 2);
    console.log('3. mid', left, right, mid);
    if (mountainArr.get(mid) > target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  console.log('3. left', left);
  // Check if the target is present in the strictly decreasing part
  if (mountainArr.get(left) === target) {
    return left;
  }

  // Target is not present in the mountain array
  return -1;
};

console.log(findInMountainArray(3, [1, 2, 3, 4, 5, 3, 1])); // 2
console.log(findInMountainArray(3, [0, 1, 2, 4, 2, 1])); // -1
