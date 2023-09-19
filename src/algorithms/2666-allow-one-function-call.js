/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
  let hasExecuted = false;
  return function (...args) {
    if (!hasExecuted) {
      hasExecuted = true;
      return fn(...args);
    } else return undefined;
  };
};
