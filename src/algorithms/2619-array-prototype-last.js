Array.prototype.last = function () {
  //   return this[this.length - 1];
  return this[this.length - 1] !== undefined ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

console.log([null, {}, 3].last()); // 3
console.log([].last()); // -1
console.log([null].last()); // null
