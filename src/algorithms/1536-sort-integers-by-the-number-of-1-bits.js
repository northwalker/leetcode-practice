/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function (arr) {
  return arr.sort((a, b) => {
    const aLen = a
      .toString(2)
      .split('')
      .filter((c) => c === '1').length;
    const bLen = b
      .toString(2)
      .split('')
      .filter((c) => c === '1').length;
    return aLen - bLen || a - b;
  });
};

// sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]); // [0,1,2,4,8,3,5,6,7]
// sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]); // [1,2,4,8,16,32,64,128,256,512,1024]
