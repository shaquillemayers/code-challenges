/* 
Solution for Two to One CodeWars problem: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript

Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters - each taken only once 
- coming from s1 or s2.
*/

function longest(s1, s2) {
  // your code

  // combined string, turn into array, filter distinct values, sort, toString, return
  const combinedString = s1 + s2;
  const arr = combinedString.split("");

  const filteredArr = arr
    .filter((elem, index, array) => array.lastIndexOf(elem) === index)
    .sort()
    .join("");
  console.log(filteredArr);
  return filteredArr;
}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
