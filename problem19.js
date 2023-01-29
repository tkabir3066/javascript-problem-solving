//19. Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

/* function timeForMilkAndCookies(date){
      //Write Your solution Here
};


console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); //true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); //false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); //true
 */

// =======Solution=========//

// method-1
/* function timeForMilkAndCookies(date) {
  if (date.getMonth() === 11 && date.getDate() === 24) {
    return true;
  } else {
    return false;
  }
} */

// method-2 short-circuit
/* 
function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24; // short-circuit
} */

//method-3 with ternary operator
function timeForMilkAndCookies(date) {
  let chrismasEve =
    date.getMonth() === 11 && date.getDate() === 24 ? true : false;
  return chrismasEve;
}
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); //true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); //false
console.log(timeForMilkAndCookies(new Date(2020, 11, 24))); //true
