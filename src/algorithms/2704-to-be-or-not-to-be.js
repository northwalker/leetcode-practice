const expect = function (val) {
  return {
    toBe: (val2) => {
      if (val === val2) return true;
      throw new Error('Not Equal');
    },
    notToBe: (val2) => {
      if (val !== val2) return true;
      throw new Error('Equal');
    },
  };
};

expect(5).toBe(5);

console.log(expect(5).toBe('5'));
