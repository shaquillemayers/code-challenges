/* 
Solution for Replace With Alphabet Position CodeWars problem: https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

alphabetPosition("The sunset sets at twelve o' clock.");
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
  // alphabet array with index in right place
  // loop over characters in input text and see if char is included in alphabet array
  // if it is, add the index to the result string

  const alphabetArray = ".abcdefghijklmnopqrstuvwxyz".split("");
  delete alphabetArray[0];

  let resultString = "";

  text.split("").map((char) => {
    const charLowerCase = char.toLowerCase();

    if (alphabetArray.includes(charLowerCase)) {
      resultString += `${alphabetArray.indexOf(charLowerCase)} `;
    }
  });
  return resultString.trim();
}

alphabetPosition("The sunset sets at twelve o' clock.");
