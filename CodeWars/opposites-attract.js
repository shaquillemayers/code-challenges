/*
Solution for Code Wars Opposites Attract problem
https://www.codewars.com/kata/555086d53eac039a2a000083
*/

function lovefunc(flower1, flower2) {
  // moment of truth

  const bothEven = flower1 % 2 === 0 && flower2 % 2 === 0 ? true : false;
  const bothOdd =
    (flower1 - 1) % 2 === 0 && (flower2 - 1) % 2 === 0 ? true : false;
  const trueLove = !bothEven && !bothOdd ? true : false;

  return trueLove;
}
