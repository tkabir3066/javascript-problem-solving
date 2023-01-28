//Create a function that returns true when num1 is equal to num2; otherwise return false.

/* 

 function isSameNum(num1, num2){
      //Write Your solution Here
};


console.log(isSameNum(30, 30)); // true
console.log(isSameNum(20, 40)); // false
console.log(isSameNum(50, 50)); // true

*/

////===== Solution=========//

// solution-1 with ternary operator
/* function isSameNum(num1, num2) {
  let result = num1 === num2 ? true : false;

  return result;
} */

// solution-2 with if-else

function isSameNum(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
console.log(isSameNum(30, 30)); // true
console.log(isSameNum(20, 40)); // false
console.log(isSameNum(50, 50)); // true
