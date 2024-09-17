// Exercise 1
// array.length = 4
// array2.length = 5
// array3.length = 0
// array4.length = 3
// array5.length = 101

// Exercise 2
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
myArray.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// Exercise 3
let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
myArray2.forEach(function(arr) {
  arr.forEach(function(num) {
    if (num % 2 === 0) {
    console.log(num);
  }
  });
});

// Exercise 4
let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
console.log(myArray3.map(num => num % 2 === 0 ? 'even' : 'odd'));

// Exercise 5
function findIntegers(arr) {
  return arr.filter(value => Number.isInteger(value));
}
console.log(findIntegers([1, 'a', '1', 3, NaN, 3.1415, -4, null, false]));

// Exercise 6
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
function oddLengths(arr) {
  return arr.map(value => value.length).filter(value => value % 2 === 1);
}

// Exercise 7
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
function sumOfSquares(arr) {
  return arr.reduce((accumulator, element) => (accumulator + element * element), 0);
}

// Exercise 8
console.log(oddLengthsReduce(arr)); // => [1, 5, 3]
function oddLengthsReduce(arr) {
  return arr.reduce((accumulator, element) => {
    if (element.length % 2 === 1) {
      accumulator.push(element.length);
    }
    return accumulator;
  }, []);
}

// Exercise 9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
console.log(hasThree(numbers1));
console.log(hasThree(numbers2));
console.log(hasThree(numbers3));
function hasThree(arr) {
  return arr.reduce((accumulator, element) => {
    return (element === 3 ? true : false) || accumulator;
  }, false)
}

// Exercise 10
let arr2 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arr2[1][3] = 606;