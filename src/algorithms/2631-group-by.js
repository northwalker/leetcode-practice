/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((prev, item) => {
    const key = fn(item);
    if (!prev[key]) prev[key] = [];

    prev[key].push(item);
    return prev;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
