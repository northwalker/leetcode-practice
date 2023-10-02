/**
 * @param {string} colors
 * @return {boolean}
 */
const winnerOfGame = function (colors) {
  let alice = 0,
    bob = 0;
  for (let i = 1; i < colors.length; i++) {
    // console.log(
    //   'i',
    //   i,
    //   colors.charAt(i - 1),
    //   colors.charAt(i),
    //   colors.charAt(i + 1)
    // );
    if (
      colors.charAt(i - 1) === colors.charAt(i) &&
      colors.charAt(i) === colors.charAt(i + 1)
    ) {
      if (colors.charAt(i) === 'A') alice++;
      if (colors.charAt(i) === 'B') bob++;
    }
  }
  // console.log('alice', alice, 'bob', bob);
  return alice - bob >= 1;
};

// winnerOfGame('AAABABB'); // true
// winnerOfGame('AA'); // false
// winnerOfGame('ABBBBBBBAAA'); // false
