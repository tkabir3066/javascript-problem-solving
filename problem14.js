//14. Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.

/* 
 function profitableGamble(prob, prize, pay){
      //Write Your solution Here
};


console.log(profitableGamble(2, 10, 20)); // false
console.log(profitableGamble(5, 10, 40)); // true
console.log(profitableGamble(6, 3, 30)); // false

*/

// =========Solution===========//
function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return true;
  } else {
    return false;
  }
}

console.log(profitableGamble(2, 10, 20)); // false
console.log(profitableGamble(5, 10, 40)); // true
console.log(profitableGamble(6, 3, 30)); // false
