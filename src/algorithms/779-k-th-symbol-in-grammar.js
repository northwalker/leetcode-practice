/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// Default forEach string generator will hit Runtime Error at kthGrammar(30, 434991989);

// Approach 2: Normal Recursion
const recursion = function (n, k) {
  // First row will only have one symbol '0'.
  if (n === 1) return 0;
  let totalElements = Math.pow(2, n - 1);
  let halfElements = totalElements / 2;

  // If the target is present in the right half, we switch to the respective left half symbol.
  if (k > halfElements) {
    return 1 - recursion(n, k - halfElements);
  }
  // Otherwise, we switch to the previous row.
  return recursion(n - 1, k);
};
const kthGrammar = function (n, k) {
  const result = recursion(n, k);
  console.log('result', result);
  return result;
};

// Approach 1: Binary Tree Traversal
// const depthFirstSearch = function (n, k, rootVal) {
//   if (n === 1) return rootVal;

//   let totalNodes = Math.pow(2, n - 1);

//   // Target node will be present in the right half sub-tree of the current root node.
//   if (k > totalNodes / 2) {
//     let nextRootVal = rootVal === 0 ? 1 : 0;
//     return depthFirstSearch(n - 1, k - totalNodes / 2, nextRootVal);
//   }
//   // Otherwise, the target node is in the left sub-tree of the current root node.
//   else {
//     let nextRootVal = rootVal === 0 ? 0 : 1;
//     return depthFirstSearch(n - 1, k, nextRootVal);
//   }
// };

// const kthGrammar = function (n, k) {
//   const result = depthFirstSearch(n, k, 0);
//   // console.log('result', result);
//   return result;
// };

kthGrammar(1, 1); // 0
kthGrammar(2, 1); // 0
kthGrammar(2, 2); // 1
kthGrammar(3, 2); // 1
kthGrammar(30, 434991989); // 0
