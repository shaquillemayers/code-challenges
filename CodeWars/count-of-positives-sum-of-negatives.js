/*
Solution for Code Wars Count of positives / sum of negatives problem
https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
*/

/* 
  Given an array of integers

  Return ARRAY, 
  where ARRAY[0] is the COUNT of positive numbers
  & ARRAY[1] is the SUM of the negative numbers

  Scenarios: 0 is neither. If the input is empty or null, return empty array
*/

const log = (x) => console.log(x);

function countPositivesSumNegatives(input) {
  // your code here
  const positivesElements = [];
  const negativeElements = [];

  if (input == null || input.length === 0) {
    return [];
  } else {
    input.forEach((elem) => {
      Math.sign(elem) === 1
        ? positivesElements.push(elem)
        : negativeElements.push(elem);
    });

    const sumOfNegatives = negativeElements.reduce(
      (prevElem, currentElem) => prevElem + currentElem
    );

    const positiveCount = positivesElements.length;
    return [positiveCount, sumOfNegatives];
  }
}

const result = countPositivesSumNegatives(undefined);
log(result);
