// Exercise 1
// [1, 4, 3]

// Exercise 2
// The error was detected on line 4, which was called on line 13

// Exercise 3
Math.sqrt(37);

// Exercise 4
Math.max(1, 5, 4, 9);

// Exercise 5
// creates an array of strings based on where there was a space (indicating a word)
// reverses the array
// creates a new array replacing the string with its length

// Exercise 6
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, regex) {
  return words.filter((word) => regex.test(word));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// Exercise 7
// error handling allows you to handle uncontrollable issues that might arise
// you can run code only in the case where exceptions arise to 'handle' them

// Exercise 8
function isNotANumber(value) {
  return (typeof value === 'number' && value != 0 && !value);
}

// Exercise 9
function isNegZero(value) {
  return (1/value === -Infinity);
}

// Exercise 10
// "6", because i++ is equivalent to i += 1. Strings are stored as numbers in memory, so += 1 will increment the value, and th next highest value is "6".
// ok, so that was wrong. it's 5 because the string "5" is coerced to a number and i++ increments after the return