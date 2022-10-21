/* 
Solution for The Hashtag Generator CodeWars problem: https://www.codewars.com/kata/52449b062fb80683ec000024/javascript

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag(str) {
  // sort empty string and string > 140 chars scenarios
  // each new word needs to start with caps. I.e anything separated by spaces
  // Try - trim - split (words as elements) - loop - capitalise first digit - join to string again
  // padStart(str.length + 1, '#')

  let resultString = false;

  if (str == false) {
    return resultString;
  }

  const words = str
    .trim()
    .split(" ")
    .filter((word) => word !== ""); // filter to handle excessive whitespace in between words

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  resultString = words.join("");

  if (resultString.length >= 140) {
    return false;
  }

  return resultString.padStart(resultString.length + 1, "#");
}

generateHashtag("a".repeat(141));
