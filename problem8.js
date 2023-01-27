//08. Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

/* 
 function lessThan100(a, b){
      //Write Your solution Here
};


console.log(lessThan100(10, 20)); // true
console.log(lessThan100(50, 60)); // false
console.log(lessThan100(20, 50)); // true

*/

////===== Solution=========//

function lessThan100(a, b) {
  let sum = a + b;

  if (sum < 100) {
    return true;
  } else {
    return false;
  }
}

console.log(lessThan100(10, 20)); // true
console.log(lessThan100(50, 60)); // false
console.log(lessThan100(20, 50)); // true
