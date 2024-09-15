let rlSync = require('readline-sync');
let first = getFirst();
let second = getSecond();

console.log(`${first} * ${second} = ${multiply(first, second)}`);

function getFirst() {
  return rlSync.question('Enter your first number\n');
}

function getSecond() {
  return rlSync.question('Enter your second number\n');
}

function multiply(a, b) {
  return a * b;
}