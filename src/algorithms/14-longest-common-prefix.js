/**
 * @param {string[]} strs
 * @return {string}
 */
// Approach 2: Vertical scanning
const longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let prefix = strs[0];

  for (let i = 0; i < prefix.length; i++) {
    const c = prefix[i];
    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j].charAt(i) !== c) {
        return prefix.slice(0, i);
      }
    }
  }
  return prefix;
};

// Approach 1: Horizontal scanning
// const longestCommonPrefix = function (strs) {
//   if (!strs.length) return '';
//   let prefix = strs[0];
//   for (let i = 0; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) != 0) {
//       prefix = prefix.slice(0, prefix.length - 1);
//       if (!prefix) return '';
//     }
//   }
//   return prefix;
// };

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(['reflower', 'flow', 'flight']));
