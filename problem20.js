//20. function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

/* 
 function largestSwap(num){
      //Write Your solution Here
};


console.log(largestSwap(14)); //false
console.log(largestSwap(53)); //true
console.log(largestSwap(-27)); //false

*/

// 1st method

/* function largestSwap(num) {
  num = num.toString();

  if (num[0] >= num[1]) {
    return true;
  } else if (num[0] < num[1]) {
    return false;
  }
} */

//// 2nd method

/* function largestSwap(num) {
  let num1 = num.toString();
  let num2 = num1.split("").reverse().join("");
  if (num1 >= num2) {
    return true;
  } else if (num1 < num2) {
    return false;
  }
} */

//3rd method
function largestSwap(num) {
  let c = num.toString();
  let a = [];
  let b = 0;

  for (let i = 0; i < c.length; i++) {
    a.push(c[c.length - 1 - i]);
    b += a[i];
  }
  let d = parseInt(b);
  if (d > num) {
    return false;
  } else {
    return true;
  }
}

console.log(largestSwap(14)); //false
console.log(largestSwap(53)); //true
console.log(largestSwap(-27)); //false
console.log(largestSwap(-72)); //false
