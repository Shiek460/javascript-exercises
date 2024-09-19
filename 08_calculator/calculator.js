const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, item) => total + item, 0)
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1)
};

const power = function(number, power) {
  let array = [];
  for (let i = 0; i < power; i++) {
    array.push(number);
  }
  return array.reduce((a, b) => a * b, 1);
  //let current = number;
  //for (let i = 1; i < power; i++) {
  //  current *= number;
  //}
  //return current;
};

const factorial = function(num) {
	let array = [];
  for (let i = num; i > 0; i--) {
    array.push(i);
  }
  return array.reduce((a, b) => a * b, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
