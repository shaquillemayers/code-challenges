/*
Solution for Code Wars Count of Mutiples of 3 or 5 problem
https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
*/

/* 
 Given a number

 Return the sum of all the multiples of 3 or 5 smaller than the number passed in
 If the number is negative, return 0

 Note: If the number is a multiple of both 3 and 5, only count it once. (Unqiue)
*/

function solution(number) {
  let multiplesOfThreeOrFive = [];

  for (let i = number - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesOfThreeOrFive.push(i);
    }
  }

  const sumOfMultiples = multiplesOfThreeOrFive.reduce(
    (prevElem, currentElem) => prevElem + currentElem,
    0
  );

  console.log(sumOfMultiples);
  return sumOfMultiples;
}

solution(-3);
