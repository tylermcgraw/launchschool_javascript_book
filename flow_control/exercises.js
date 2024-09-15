// Exercise 1
/*
false || (true && false);
  false
true || (1 + 2);
  true
(1 + 2) || true;
  3
true && (1 + 2);
  3
false && (1 + 2);
  false
(1 + 2) && true;
  true
(32 * 4) >= 129;
  false
false !== !true;
  false
true === 4;
  false
false === (847 === '847');
  true
false === (847 == '847');
  false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
  true
*/

// Exercise 2 and 3
function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("Not an int");
    return;
  }
  if (num % 2 === 0) console.log("true");
  else console.log("false");
}

// Exercise 4
// Product2
// Product3
// Product not found! (missing break)

// Exercise 5
/*
if (foo()) {
  return 'bar';
} else {
  return qux();
}
*/

// Exercise 6
// 'not empty'

// Exercise 7
function makeAllCaps(phrase) {
  if (phrase.length > 10) {
    return phrase.toUpperCase();
  }
  return phrase;
}

// Exercise 8
function numberRange(num) {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is greater than 100`);
  }
}

// Exercise 9
/*
false
true
3
false
3
3
undefined
null
*/

// Exercise 10
/*
'foo is 5, bar is 7'
'foo is 0, bar is 0'
'foo is 4, bar is 42'
'foo is 3, bar is 42'
*/