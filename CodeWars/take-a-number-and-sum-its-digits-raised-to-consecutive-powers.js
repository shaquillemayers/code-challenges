/* 
Solution for Take a Number And Sum Its Digits Raised To The Consecutive Powers CodeWars problem: 
https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. 
What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases (input -> output):

1, 10 -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

1, 100 -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a, b] the function should output an empty list.

90, 100 --> []
*/

function sumDigPow(a, b) {
  // Your code here

  // get range of integers (inclusive) between a & b and put into an array
  // can loop over each digit and increment i for Math.pow(i, i + 1)

  // 1. Get range of integers (inclusive) and put into an array
  const minInt = Math.min(a, b);
  const maxInt = Math.max(a, b);
  const rangeOfIntegers = [];
  const resultsArray = [];

  for (let i = minInt; i <= maxInt; i++) {
    rangeOfIntegers.push(String(i));
  }

  // 2. Loop over array of integers, with a nested loop over digits
  for (let i = 0; i < rangeOfIntegers.length; i++) {
    const arrayOfDigits = rangeOfIntegers[i].split("");
    let calc = 0;

    for (let j = 0; j < arrayOfDigits.length; j++) {
      calc += Math.pow(arrayOfDigits[j], j + 1);
    }

    if (rangeOfIntegers[i] == calc) {
      resultsArray.push(calc);
    }
  }

  console.log(resultsArray);
  return resultsArray;
}

sumDigPow(100, 90);
