const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, current) => accumulator * current, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  if (a < 0) {
    return 'ERROR';
  }
  if (a === 0) {
    return 1;
  }

	let output = 1;
  for (let i = 1; i <= a; i++) {
    output *= i;
  }
  return output;
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
