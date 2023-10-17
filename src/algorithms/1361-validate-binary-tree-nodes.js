/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */

/**
 * Hint: Find the parent of each node.
 * A valid tree must have nodes with only one parent and exactly one node with no parent.
 */

const findRoot = function () {};

const validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  let nodes = leftChild.concat(rightChild);
  let rootIndex = -1;
  // Fint root index
  for (let i = 0; i < n; i++) {
    if (!nodes.includes(i)) {
      rootIndex = i;
    }
  }
  if (rootIndex === -1) {
    // console.log('No root node');
    return false;
  }
  // console.log('rootIndex', rootIndex);

  let seen = [rootIndex];
  let stack = [rootIndex];
  while (stack.length) {
    const node = stack.pop();
    const leftChildNode = leftChild[node];

    if (leftChildNode !== undefined && leftChildNode !== -1) {
      if (seen.includes(leftChildNode)) {
        // console.log('seen.includes leftChildNode', leftChildNode);
        return false;
      }
      seen.push(leftChildNode);
      stack.push(leftChildNode);
    }
    const rightChildNode = rightChild[node];
    if (rightChildNode !== undefined && rightChildNode !== -1) {
      if (seen.includes(rightChildNode)) {
        // console.log('seen.includes rightChildNode', rightChildNode);
        return false;
      }
      seen.push(rightChildNode);
      stack.push(rightChildNode);
    }

    // console.log('stack', stack, 'seen', seen);
  }

  // console.log(n, seen.length, seen);
  return n === seen.length;
};

// validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]); // true
// validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, 3, -1, -1]); // false
// validateBinaryTreeNodes(2, [1, 0], [-1, -1]); // false
// validateBinaryTreeNodes(4, [3, -1, 1, -1], [-1, -1, 0, -1]); // true
