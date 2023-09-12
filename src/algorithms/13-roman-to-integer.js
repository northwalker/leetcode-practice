/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const romanValues = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let i = 0,
    sum = 0;
  while (i < s.length) {
    const c = s.charAt(i);
    const value = romanValues[c];
    if (value) {
      const nextValue = romanValues[s.charAt(i + 1)];
      if (nextValue > value) {
        sum += romanValues[s.charAt(i + 1)] - romanValues[c];
        i += 2;
      } else {
        sum += romanValues[c];
        i++;
      }
    } else i++;
  }
  return sum;
};

// console.log(romanToInt('III'), romanToInt('III') === 3);
// console.log(romanToInt('LVIII'), romanToInt('LVIII') === 58);
console.log(romanToInt('MCMXCIV'), romanToInt('MCMXCIV') === 1994);
