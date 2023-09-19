/**
 * @return {Generator<number>}
 */
const fibGenerator = function* () {
  let value1 = 0,
    value2 = 1;

  while (true) {
    yield value1;
    [value1, value2] = [value2, value1 + value2];
  }
};
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
