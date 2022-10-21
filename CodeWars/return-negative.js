/*
Solution for Code Wars Return Negative problem
https://www.codewars.com/kata/55685cd7ad70877c23000102
*/

function makeNegative(num) {
  return num === 0 || Math.sign(num) === -1 ? num : -num;
}

makeNegative(5);
