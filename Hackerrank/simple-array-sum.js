/*
Solution for HackerRank Simple Array Sum
https://www.hackerrank.com/challenges/simple-array-sum/problem
*/

function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    return ar.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    });
}