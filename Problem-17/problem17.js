//17. Create a function that calculates the number of different squares in an n * n square grid.

/* 
 function numberSquares(n){
      //Write Your solution Here
};


console.log(numberSquares(4)); // 30
console.log(numberSquares(5)); // 55
console.log(numberSquares(6)); // 91

*/

//1st method
function numberSquares(n) {
  let squares = (n * (n + 1) * (2 * n + 1)) / 6;
  return squares;
}

console.log(numberSquares(4)); // 30
console.log(numberSquares(5)); // 55
console.log(numberSquares(6)); // 91

// 2nd method

/* function numberSquares(n) {
  let squares = 0;
  for (let i = 0; i <= n; i++) {
    squares += Math.pow(i, 2);
  }
  return squares;
}

console.log(numberSquares(4)); // 30
console.log(numberSquares(5)); // 55
console.log(numberSquares(6)); // 91 */
