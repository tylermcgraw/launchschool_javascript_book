// Exercise 2
function factorial(num) {
  let product = num;
  for (let i = num - 1; i > 1; i--) {
    product *= i;
  }
  return product;
}

// Exercise 3
// the condition inside the while loop uses an assignment operator rather than a comparison operator, so counter will always be set to 1 after being incremented inside the loop. Since this assignment is truthy, the while loop continues.

// Exercise 4
// prints 1 to 5 on new lines

// Exercise 5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// Exercise 6
function recursiveFactorial(num) {
  if (num > 1) {
    return num * recursiveFactorial(num - 1);
  }
  return num;
}