/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function (arr1, arr2) {
  let map = {};
  arr1.forEach((item) => {
    const { id } = item;
    map[id] = item;
  });
  arr2.forEach((item) => {
    const { id } = item;
    if (!map[id]) map[id] = item;
    else {
      map[id] = Object.assign({}, map[id], item);
    }
  });
  // console.log('map', JSON.stringify(map));
  const result = Object.keys(map).map((key) => map[key]);
  // console.log('result', JSON.stringify(result));
  return result;
};

// join(
//   [
//     { id: 1, x: 1 },
//     { id: 2, x: 9 },
//   ],
//   [{ id: 3, x: 5 }]
// );

// join(
//   [
//     { id: 1, x: 2, y: 3 },
//     { id: 2, x: 3, y: 6 },
//   ],
//   [
//     { id: 2, x: 10, y: 20 },
//     { id: 3, x: 0, y: 0 },
//   ]
// );

join(
  [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
  [{ id: 1, b: { c: 84 }, v: [1, 3] }]
);
