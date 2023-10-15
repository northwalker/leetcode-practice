// Fisher-Yates Shuffle
const shuffle = function (originArray, { inPlace = false } = {}) {
  const array = inPlace ? originArray : [...originArray];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  if (!inPlace) return array;
};

// For console.log, it's in-place sorting
let test1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffle(test1);
console.log(JSON.stringify(test1));

let test2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffle(test2);
console.log(JSON.stringify(test2));

let test3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffle(test3);
console.log(JSON.stringify(test3));
