/*
Solution for HackerRank Compare The Triplets
https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen
*/

// input array
let arr1 = [17, 28, 30];
let arr2 = [99, 16, 8];

// solution
function compareTriplets(a, b) {
    let Alice = 0;
    let Bob = 0;

    a.forEach((element, i) => {
    if (a[i] > b[i]) {
        return Alice += 1
    } else if (a[i] < b[i]) {
        return Bob += 1
    } 
    });

    return [Alice, Bob];
}
