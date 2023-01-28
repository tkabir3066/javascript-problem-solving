//13. Add up all the numbers from 1 to the number you passed to the function.

/* 
 function addUp(num){
      //Write Your solution Here
};


console.log(addUp(10)); // 55
console.log(addUp(40)); // 820
console.log(addUp(15)); // 120

*/

//======Solution=========//

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(addUp(10)); // 55
console.log(addUp(40)); // 820
console.log(addUp(15)); // 120
