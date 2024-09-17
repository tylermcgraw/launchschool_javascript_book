// Exercise 1
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};
person.name;

// Exercise 2
// all

// Exercise 3
let myArray = {name: "Tyler", age: 26, occupation: "Teacher"
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Exercise 4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
Object.keys(obj).map(key => key.toUpperCase());

// Exercise 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);

// Exercise 6
/*
"foo" primitive
3.1415  primitive
[ 'a', 'b', 'c' ] object
false primitive
foo neither
function bar() { return "bar"; }  object
undefined primitive
{ a: 1, b: 2 }  object
*/

// Exercise 7
myObj.qux = 3;
// different, for/in iterates over prototype and myObj whereas forEach only iterates over myObj

// Exercise 8
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

function copyObj(objToCopy, keys = Object.keys(objToCopy)) {
  let obj = {};
  keys.forEach(key => obj[key] = objToCopy[key]);
  return obj;
}

// Exercise 9
// 'hi'
// 'hello'
// object is mutated, variable is only changed in scope of function

// Exercise 10
// 6 primitives: 1, 2, "a", "b", false, null
// 4 objects: [1, 2, ["a", ["b", false]], null, {}], ["a", ["b", false]], ["b", false], {}

// Exercise 11
let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
obj2.bar[3].xyz = 606;

// Exercise 12
function foo(bar) {
  console.log(bar, bar, bar);
}
let bar = foo;
foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

// Exercise 13
function foo(bar) {
  console.log(bar());
}

foo(function() {return 'Welcome'});    // Should print 'Welcome'
foo(function() {return 3.1415});    // Should print 3.1415
foo(function() {return [1, 2, 3]});    // Should print [1, 2, 3]

// Exercise 14
// variables: xyzzy, greeting, name, howdy, foo
// object property names: a, b, c, d, 0, 1, 2
// primitives: 'Hi', 'Grace', greeting, name, 1, 2, 3, 4, 5, ' ', 'a', 'b', 'c', 'd'
// objects: hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}

// Exercise 15
// variables: bar, arg1, arg2, foo, qux, result
// object property names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3
// primitives: 'Hello', 'Victor', 'Antonina', 0, 1, 2, 3, 4, 5, 6, null, NaN, abc, def, ghi, jkl, mno, pqr
// objects: bar, qux, [1, 2, 3, [4, 5, 6]], [4, 5, 6]