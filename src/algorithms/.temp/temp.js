// 1
Array.prototype.myFlat = function (n = 1) {
  let result = this,
    allFlatten = false;
  for (let i = 0; i < n && !allFlatten; i++) {
    allFlatten = true;
    result = result.reduce((accu, item) => {
      if (Array.isArray(item)) {
        item.forEach((item1) => {
          if (Array.isArray(item1)) allFlatten = false;
          accu.push(item1);
        });
      } else {
        accu.push(item);
      }
      return accu;
    }, []);
  }
  return result;
};

// console.log([1, 2, [3, 4]].myFlat()); // [1, 2, 3, 4]
// console.log([1, 2, [3, 4, [5, 6]]].myFlat()); // [1, 2, 3, 4, [5, 6]]
// console.log([1, 2, [3, 4, [5, 6]]].myFlat(2)); // // [1, 2, 3, 4, 5, 6]
// console.log([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]].myFlat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log([1, 2, , 4, 5].myFlat()); // [1, 2, 4, 5]
// console.log([1, , 3, ['a', , 'c']].myFlat()); // [ 1, 3, "a", "c" ]
// console.log([1, , 3, ['a', , ['d', , 'e']]].myFlat()); // [ 1, 3, "a", ["d", empty, "e"] ]
// console.log([1, , 3, ['a', , ['d', , 'e']]].myFlat(2)); // [ 1, 3, "a", "d", "e"]

// 2
Array.prototype.myFlatMap = function (fn, n) {
  // return this.flatMap(fn, n);
  // return this.map(fn).flat(n);
  // return this.map(fn).flat(n);
  // return this.map(fn).myFlat(100);
};

// console.log([1, 2, 3, 4].myFlatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 3, 6, 4, 8]
// console.log(["it's Sunny in", '', 'California'].myFlatMap((x) => x.split(' '))); // ["it's","Sunny","in", "", "California"]
// console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
// console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]

// 3
function argsCount() {
  length = arguments.length;
  if (length > 0)
    return (...args) => {
      if (args.length > 0) return argsCount(...arguments, ...args);
      return length;
    };
  return length;
}

// console.log(argsCount()); // return 0;
// console.log(argsCount(1)()); // return 1;
// console.log(argsCount(1)(1)()); // return 2;
// console.log(argsCount(1, 1, 1)()); // return 3;
// console.log(argsCount(1)(1, 1)(1)()); // return 4
// console.log(argsCount(1)); // return a function
// console.log(argsCount(1)(1)(1)(1)(1, 1, 1, 1, 1)); // return a function

// 4
const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// console.log(isPrime(2)); // return true
// console.log(isPrime(4)); // return false

// 5
const nthPrime = async (nth) => {
  let num = 2,
    count = 1;
  while (count < nth) {
    num++;
    if (isPrime(num)) count++;
  }
  console.log(`${nth}-th prime is`, num);
  return num;
};

// nthPrime(1); // should be 2
// nthPrime(2); // should be 3
// nthPrime(3); // should be 5
// nthPrime(20); // should be 71
// nthPrime(100); // should be 541

// 5.1 not-block
(async function () {
  //   await nthPrime(1); // should be 2
  //   await nthPrime(2); // should be 3
  //   await nthPrime(3); // should be 5
  //   await nthPrime(20); // should be 71
  //   await nthPrime(100); // should be 541
})();

// 5.2 cache
let nthPrimeMap = new Map();
const nthPrimeWithMap = async (nth) => {
  let num = 2,
    count = 1;
  nthPrimeMap.set(count, num);
  if (nthPrimeMap.has(nth)) {
    console.log(`Return ${nth} prime from cache`, nthPrimeMap.get(nth));
    return nthPrimeMap.get(nth);
  }

  while (count < nth) {
    num++;
    if (isPrime(num)) {
      count++;
      nthPrimeMap.set(count, num);
    }
  }
  console.log(`${nth}-th prime with cache is`, num);
  return num;
};

// nthPrimeWithMap(100); // should be 541
// nthPrimeWithMap(50); // should be 229
