/* 
Solution for HackerRank Sock Merchant
https://www.hackerrank.com/challenges/sock-merchant/problem
*/

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairsArray = [];

    for (let i=0; i < n; i++) {
       
        for (let j=(i+1); j < n; j++) {
            if (ar[i] === ar[j]) {
                pairsArray.push(ar[j]);
                delete (ar[j]);
                break;
            }
        }
    }
    
    let truePairsArray = []; 

    pairsArray.filter((element) => {
        if(element !== undefined) {
            truePairsArray.push(element);
        }
    })

    let pairs = truePairsArray.length;
    return pairs;
}