/* 
Solution for HackerRank Counting Valleys
https://www.hackerrank.com/challenges/counting-valleys/problem

Let moutains = 0, let valleys = 0, let altitude = 0. DONE
Split string into individual characters. DONE
'U' = altiude +=1, 'D' = altitude  -=1 
If altitude > 0, then mountains ++, if altitude < 0, then valleys++ 

 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    let altitude = 0;
    let mountains = 0;
    let valleys = 0;

    let stepsArray = path.split('');
    
    stepsArray.forEach(element => {
        if (element === 'U') {
            altitude +=1;
            if (altitude > 0 && altitude === 1) {
                mountains +=1;
            } 
        } else if (element === 'D') {
            altitude -=1;
            if (altitude < 0 && altitude === -1) {
                valleys +=1;
            }
        } else {
            console.log('Please check path is correct.')
        }
    })

    return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU'));