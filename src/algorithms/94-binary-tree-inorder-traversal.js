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
 * @return {number[]}
 */

const traversal = function (root, result) {
  if (root.left) traversal(root.left, result);
  result.push(root.val);
  if (root.right) traversal(root.right, result);
};

const inorderTraversal = function (root) {
  let result = [];
  if (root) traversal(root, result);
  return result;
};
