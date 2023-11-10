/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
// Approach 2: Iterative, Follow the Path
const restoreArray = function (adjacentPairs) {
  let hashMap = new Map();
  for (let i = 0; i < adjacentPairs.length; i++) {
    const pair = adjacentPairs[i];
    const x = pair[0];
    const y = pair[1];
    if (!hashMap.has(x)) hashMap.set(x, []);
    hashMap.get(x).push(y);
    if (!hashMap.has(y)) hashMap.set(y, []);
    hashMap.get(y).push(x);
  }

  let root = null;
  const mapIter = hashMap.keys();
  while (!root) {
    const value = mapIter.next().value;
    if (hashMap.get(value).length === 1) {
      root = value;
      break;
    }
  }

  let currNode = +root,
    ans = [currNode],
    prevNode = null,
    walk = 1;
  while (walk < hashMap.size) {
    let neighbors = hashMap.get(currNode);
    for (let neighbor of neighbors) {
      if (neighbor !== prevNode) {
        ans.push(neighbor);
        walk++;
        prevNode = currNode;
        currNode = neighbor;
        // console.log('ans', ans);
        break;
      }
    }
  }
  // console.log(ans);
  return ans;
};
