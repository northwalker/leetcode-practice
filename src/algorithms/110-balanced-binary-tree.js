/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

const isBalanced = function (root) {
  if (!root) return true;

  const rightDepth = maxDepth(root.right);
  const leftDetch = maxDepth(root.left);
  return (
    Math.abs(rightDepth - leftDetch) <= 1 &&
    isBalanced(root.right) &&
    isBalanced(root.left)
  );
};

console.log(isBalanced([3, 9, 20, null, null, 15, 7])); // true
console.log(isBalanced([1, 2, 2, 3, 3, null, null, 4, 4])); // fasle
console.log(isBalanced([])); // true
console.log(isBalanced([1, 2, 2, 3, null, null, 3, 4, null, null, 4])); //false
