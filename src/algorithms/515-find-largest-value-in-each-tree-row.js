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
const largestValues = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length) {
    let currentLength = queue.length;
    let currentMax = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < currentLength; i++) {
      const node = queue.shift();
      console.log(currentMax, node.val);
      currentMax = Math.max(currentMax, node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentMax);
  }
  return result;
};
