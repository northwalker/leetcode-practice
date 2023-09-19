/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function (obj, classFunction) {
  if (obj == null || typeof classFunction != 'function') return false;

  console.log('typeof', typeof classFunction);
  const val = Object(obj) instanceof classFunction;
  console.log('instanceof', Object(obj) instanceof classFunction);

  return val;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

console.log(checkIfInstanceOf(new Date(), Date)); // true
console.log(checkIfInstanceOf(Date, Date)); // false
console.log(checkIfInstanceOf(5, Number)); // true

class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal)); // true
