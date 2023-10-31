/**
 * @param {number[]} pref
 * @return {number[]}
 */
const findArray = function (pref) {
  let result = new Array(pref.length);
  result[0] = pref[0];
  for (let i = 1; i < pref.length; i++) {
    result[i] = pref[i] ^ pref[i - 1];
  }
  return result;
};

findArray([5, 2, 0, 3, 1]); // [5,7,2,3,2]
findArray([13]); // [13]
