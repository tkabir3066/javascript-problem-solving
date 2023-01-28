// Create a function that takes a number (step) as an argument and returns the amount of matchsticks in that step.

/* 
 function matchHouses(step){
      //Write Your solution Here
};


console.log(matchHouses(5)); // 26
console.log(matchHouses(0)); // 0
console.log(matchHouses(10)); // 51

*/

function matchHouses(step) {
  let n = step;
  if (n > 0) {
    //     let matchsticks = step * 6 - (step - 1);
    let matchsticks = step * 5 + 1;
    return matchsticks;
  } else if (n === 0) {
    return 0;
  }
}

console.log(matchHouses(5)); // 26
console.log(matchHouses(0)); // 0
console.log(matchHouses(10)); // 51
console.log(matchHouses(15)); // 76
console.log(matchHouses(100)); // 76
