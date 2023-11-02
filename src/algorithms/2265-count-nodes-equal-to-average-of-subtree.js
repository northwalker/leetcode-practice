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
 * @return {number}
 */
const averageOfSubtree = function (root) {
  let count = 0;
  const postOrder = function (root) {
    if (!root) return [0, 0];

    const [leftSum, leftCount] = postOrder(root.left);
    const [rightSum, rightCount] = postOrder(root.right);
    const nodeSum = leftSum + rightSum + root.val;
    const nodeCount = leftCount + rightCount + 1;
    if (root.val === Math.floor(nodeSum / nodeCount)) count++;

    return [nodeSum, nodeCount];
  };

  postOrder(root);
  return count;
};
