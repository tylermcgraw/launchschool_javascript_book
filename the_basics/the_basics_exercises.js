// Exercise 1
let name = "john" + " " + "doe";
console.log(name);

// Exercise 2
let number = 4936;
let ones = number % 10;
let tens = (number - ones) / 10 % 10;
let hundreds = (number - ones - 10 * tens) / 100 % 10;
let thousands = (number - ones - 10 * tens - 100 * hundreds) / 1000 % 10;
console.log(ones + "\n" + tens + "\n" + hundreds + "\n" + thousands)

// Exercise 3
/*
'true' = String
false = Boolean
1.5 = Number
2 = Number
undefined = Undefined
{foo: 'bar'} = Object
*/

// Exercise 4
/*
Due to implicit type conversion, when a string and non-string are concatenated,
the non-string is converted to a string and then concatenated.
*/

// Exercise 5
console.log(Number('5') + 10);

// Exercise 6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Exercise 7
// No, Javascript returns undefined when an index is out of bounds

// Exercise 8
let names = [
  "asta",
  "butterscotch",
  "pudding",
  "neptune",
  "darwin"
];

// Exercise 9
let pets = {
  asta: "dog",
  butterstoch: "cat",
  pudding: "cat",
  neptune: "fish",
  darwin: "lizard",
}

// Exercise 10
// false

// Exercise 11
// 3

// Exercise 12
// true