/**
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = function (words) {
  // D.P. Solution
  let map = {},
    maxLen = 0;
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < words.length; i++) {
    let word = words[i],
      longest = 0;

    // console.log('word', word);
    for (let j = 0; j < word.length; j++) {
      let subword = word.slice(0, j) + word.slice(j + 1);
      //   console.log('subword', word.slice(0, j), word.slice(j + 1));
      longest = Math.max(longest, (map[subword] || 0) + 1);
    }
    map[word] = longest;
    // console.log('maxLen', maxLen, longest);
    maxLen = Math.max(maxLen, longest);
  }

  //   console.log('map', map);
  //   console.log('maxLen', maxLen);
  return maxLen;
};

// longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca']); // 4
// longestStrChain(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc']); // 5
// longestStrChain(['abcd', 'dbqca']); // 1
// longestStrChain(['bdca', 'bda', 'ca', 'dca', 'a']); // 4
