/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
// Approach 1: Recursive Depth-First Search (DFS)
const compactObject = function (obj) {
  if (!obj) return false;
  if (typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    const newArray = [];
    obj.forEach((item) => {
      const data = compactObject(item);
      if (data) newArray.push(data);
    });
    return newArray;
  } else {
    let newObj = {};
    Object.keys(obj).forEach((key) => {
      const data = compactObject(obj[key]);
      if (data) newObj[key] = data;
    });
    return newObj;
  }
};

// const test1 = compactObject([null, 0, false, 1]); // [1]
// console.log(JSON.stringify(test1));
// const test2 = compactObject({ a: null, b: [false, 1] }); // {"b": [1]}
// console.log(JSON.stringify(test2));
// const test3 = compactObject([null, 0, 5, [0], [false, 16]]); // [5, [], [16]]
// console.log(JSON.stringify(test3));
// const test4 = compactObject({ a: 1, b: 1, c: null, d: 'false', e: 0 }); // {"a":1,"b":1,"d":"false"}
// console.log(JSON.stringify(test4));
// const test5 = compactObject({
//   i: 72,
//   p: 0,
//   u: true,
//   q: 21,
//   g: 87,
//   o: 3,
//   v: null,
//   f: 4,
//   n: 64,
//   t: null,
//   s: '',
//   m: false,
//   b: true,
//   z: null,
//   d: 76,
//   a: 65,
//   r: 63,
//   c: 66,
//   x: null,
//   y: 4,
//   k: true,
//   w: 2,
// });
// console.log(JSON.stringify(test5)); // {"i":72,"u":true,"q":21,"g":87,"o":3,"f":4,"n":64,"b":true,"d":76,"a":65,"r":63,"c":66,"y":4,"k":true,"w":2}
