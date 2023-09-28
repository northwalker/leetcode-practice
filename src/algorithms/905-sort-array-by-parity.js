/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function (nums) {
  let odd = [],
    even = [];
  nums.forEach((item) => (item % 2 === 0 ? even.push(item) : odd.push(item)));
  return even.concat(odd);
};
