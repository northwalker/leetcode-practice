/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const timeLimit = function (fn, t) {
  return async function (...args) {
    const fnPromise = fn(...args);
    const timeoutPromise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });

    return Promise.race([fnPromise, timeoutPromise]);
  };
};

// Solution hint
// const timeLimit = function (fn, t) {
//   return async function (...args) {
//     return new Promise((resolve, reject) => {
//       const timer = setTimeout(() => {
//         reject('Time Limit Exceeded');
//       }, t);
//       fn(...args)
//         .then(resolve)
//         .catch(reject);
//     });
//   };
// };

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
