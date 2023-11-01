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
const findMode = function (root) {
  const counter = new Map();
  dfs(root, counter);
  console.log('counter', counter);

  let maxFeq = 0,
    ans = [];
  counter.forEach((value, key) => {
    if (value === maxFeq) ans.push(key);
    else if (value > maxFeq) {
      maxFeq = value;
      ans = [key];
    }
  });
  // console.log(ans);
  return ans;
};

const dfs = function (root, counter) {
  if (!root) return null;
  if (!counter.has(root.val)) counter.set(root.val, 1);
  else {
    const num = counter.get(root.val);
    counter.set(root.val, num + 1);
  }
  dfs(root.left, counter);
  dfs(root.right, counter);
};
