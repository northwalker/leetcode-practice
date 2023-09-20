/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function (fn, t) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
