/* 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum(a, b) {
  const smallNum = Math.min(a, b);
  const largeNum = Math.max(a, b);
  let sum = 0;

  for (let i = smallNum; i <= largeNum; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
}

getSum(0, -1);
