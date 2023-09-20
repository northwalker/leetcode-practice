/**
 * @param {number[]} nums
 */
const ArrayWrapper = function (nums) {
  this.result = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return [...this.result].reduce((sum, num) => sum + num, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.result.join(',')}]`;
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
