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
const isSymmetric = function (root) {
  if (!root) return true;

  return isSymmetricTree(root.left, root.right);
};

// 100 modified
const isSymmetricTree = function (p, q) {
  if (!q && !p) return true;
  if (!q || !p) return false;
  return (
    q.val === p.val &&
    isSymmetricTree(p.left, q.right) &&
    isSymmetricTree(p.right, q.left)
  );
};
