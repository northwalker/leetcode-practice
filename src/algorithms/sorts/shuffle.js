const shuffle = function (array) {
  let result = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

console.log(JSON.stringify(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])));
console.log(JSON.stringify(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])));
console.log(JSON.stringify(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])));
console.log(JSON.stringify(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])));

console.log(JSON.stringify(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])));
