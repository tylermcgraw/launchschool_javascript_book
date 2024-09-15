let rlSync = require('readline-sync');

function getFirst() {
  return rlSync.question('Enter your first name\n');
}

function getLast() {
  return rlSync.question('Enter your last name\n');
}

console.log(`Hello ${getFirst()} ${getLast()}!`);