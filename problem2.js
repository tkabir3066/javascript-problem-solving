//02. Converts hours into seconds.

/* function howManySeconds(hours) {
    //Write Your solution Here
};


console.log(howManySeconds(12)); // 43200
console.log(howManySeconds(8)); // 28800
console.log(howManySeconds(3)); // 10800 */

////======== Solution =====/////

function howManySeconds(hours) {
  let seconds = hours * 3600;
  return seconds;
}

console.log(howManySeconds(12)); // 43200
console.log(howManySeconds(8)); // 28800
console.log(howManySeconds(3)); // 10800
