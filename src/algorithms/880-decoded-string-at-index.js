/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// Reverse Traversal
const decodeAtIndex = function (s, k) {
  let length = 0,
    i = 0;

  while (length < k) {
    const c = s.charAt(i);
    if (!isNaN(s.charAt(i))) length *= Number(c);
    else length++;

    i++;
  }
  for (let j = i - 1; j >= 0; j--) {
    const c = s.charAt(j);
    if (!isNaN(c)) {
      length /= Number(c);
      k %= length;
    } else {
      if (k === 0 || k === length) {
        return s.charAt(j);
      }
      length--;
    }
  }
};

// decodeAtIndex('leet2code3', 10); // o
// decodeAtIndex('ha22', 5); // h
// decodeAtIndex('a2345678999999999999999', 1); // a
// decodeAtIndex('y959q969u3hb22odq595', 222280369); //
