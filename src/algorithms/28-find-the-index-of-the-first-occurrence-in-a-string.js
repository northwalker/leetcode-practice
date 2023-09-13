/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//
const strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// const strStr = function (haystack, needle) {
//   let pass = false;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack.charAt(i) === needle[0]) {
//       pass = true;
//       for (let j = 0, k = i; j < needle.length; j++, k++) {
//         console.log('check', needle[0], haystack[k]);
//         if (needle[j] !== haystack[k]) pass = false;
//       }
//     }
//     if (pass) return i;
//   }
//   return -1;
// };

// console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
