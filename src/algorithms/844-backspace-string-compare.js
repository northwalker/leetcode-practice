/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  const sAry = s.split('');
  while (sAry.indexOf('#') !== -1) {
    const i = sAry.indexOf('#');
    if (i - 1 >= 0) sAry.splice(i - 1, 2);
    else sAry.splice(i, 1);
  }

  const tAry = t.split('');
  while (tAry.indexOf('#') !== -1) {
    const i = tAry.indexOf('#');
    if (i - 1 >= 0) tAry.splice(i - 1, 2);
    else tAry.splice(i, 1);
  }
  // console.log(sAry.join('') === tAry.join(''), sAry.join(''), tAry.join(''));
  return sAry.join('') === tAry.join('');
};

// backspaceCompare('ab#c', 'ad#c'); // ac === ac  // true
// backspaceCompare('ab##', 'c#d#'); // '' === ''  // true
// backspaceCompare('a#c', 'b'); // c !== b // false
// backspaceCompare('y#fo##f', 'y#f#o##f'); //  f === f // true
