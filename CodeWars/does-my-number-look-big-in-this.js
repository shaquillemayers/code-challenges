/*
Solution for Code Wars Count of Mutiples of 3 or 5 problem
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
*/

/* 
  A Narcissistic Number is a positive number which is the sum of its own digits, 
  each raised to the power of the number of digits in a given base. 
  In this Kata, we will restrict ourselves to decimal (base 10).

  Check what decimal base 10 is but....

   1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

  Number.toString() -> string.split('') -> elems ^ str.length
*/

function narcissistic(value) {
  // Code me to return true or false

  // Convert to string, and then array.
  const string = value.toString();
  const array = string.split("");

  const sum = array.reduce(
    (prevElem, currentElem) => prevElem + Math.pow(currentElem, string.length),
    0
  );

  return sum === value ? true : false;
}

console.log(narcissistic(153));
