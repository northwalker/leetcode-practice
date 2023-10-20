/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
const NestedIterator = function (nestedList) {
  this.nestedArray = [];
  this.current = 0;

  const flat = function (nestedList) {
    let result = [];
    for (let i = 0; i < nestedList.length; i++) {
      const item = nestedList[i];
      if (item.isInteger()) {
        // console.log('item int', item, item.isInteger());
        result.push(item.getInteger());
      } else {
        // console.log('item list', item, item.getList());
        result = [...result, ...flat(item.getList())];
      }
    }
    return result;
  };
  this.nestedArray = flat(nestedList);
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.current < this.nestedArray.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.nestedArray[this.current++];
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
