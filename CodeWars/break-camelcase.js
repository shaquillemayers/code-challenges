/* 
Solution for Break CamelCase CodeWars problem: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

Complete the solution so that the function will break up camel casing, using a space between words.
E.g. 
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""
*/

function solution(string) {
  // identify an uppercase letter
  // insert a space before uppercase letter
  const arr = [...string];

  const spaceBetweenCapitals = arr
    .map((elem) => {
      if (elem === elem.toUpperCase()) {
        elem = " " + elem;
      }
      return elem;
    })
    .join("");

  return spaceBetweenCapitals;
}

solution("camelCasingE");
