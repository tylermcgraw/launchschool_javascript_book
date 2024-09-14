let rlSync = require('readline-sync');

let firstName = rlSync.question('Enter your first name\n');
let lastName = rlSync.question('Enter your last name\n');

console.log(`Hello ${firstName} ${lastName}!`);