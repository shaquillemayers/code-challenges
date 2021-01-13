/*
Solution for HackerRank problem: A Very Big Sum
https://www.hackerrank.com/challenges/a-very-big-sum/problem
*/


let arr1 = [1000000, 110000, 120000];

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    return ar.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
}

console.log(aVeryBigSum(arr1));