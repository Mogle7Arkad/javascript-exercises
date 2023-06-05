const add = function(a, b) {
	return a + b;
};
console.log(0,0);

const subtract = function subt(c,d) {
	return c-d;
};
//console.log(3,2);

const sum = function(array) {
	return array.reduce((e, f) => e + f, 0)
};

const multiply = function mult(array) {
  return array.length
  ?array.reduce((accumulator, nextIem)=> accumulator*nextIem)
  :0
};


const power = function(m, n) {
	return Math.pow(m, n);
};

const factorial = function(p) {
	if(p === 0) return 1;
  let product = 1;
  for (let i = p; i > 0; i--){
    product *=i;
  }
  return product;
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
