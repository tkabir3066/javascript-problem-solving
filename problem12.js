//12. Write function to calculate Perimeter of Rectangles

/* 
 function findPerimeter(height, width){
      //Write Your solution Here
};


console.log(findPerimeter(20, 50)); // 140
console.log(findPerimeter(80, 30)); // 220
console.log(findPerimeter(10, 40)); // 100

*/

//=====Solution=======//

function findPerimeter(height, width) {
  const perimeter = 2 * (height + width);
  return perimeter;
}

console.log(findPerimeter(20, 50)); // 140
console.log(findPerimeter(80, 30)); // 220
console.log(findPerimeter(10, 40)); // 100
