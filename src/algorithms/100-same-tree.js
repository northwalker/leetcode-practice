/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let resultP = [],
    resultQ = [];
  if (p) traversal(p, resultP);
  if (q) traversal(q, resultQ);
  // console.log('resultP', resultP.join(''), 'resultQ', resultQ.join(''));
  return resultP.join('') === resultQ.join('');
};

const traversal = function (root, result) {
  result.push(root.val);
  if (root.left) traversal(root.left, result);
  else result.push('-');
  if (root.right) traversal(root.right, result);
  else result.push('-');
};
