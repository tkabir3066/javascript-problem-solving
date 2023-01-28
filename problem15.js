//15. Takes an array of numbers, returns both the minimum and maximum numbers, in that order.

/* 
function minMax(arr){
      //Write Your solution Here
};


console.log(minMax([2, -1, 5])); // [ -1, 5 ]
console.log(minMax([0, 5, 2])); // [ 0, 5 ]
console.log(minMax([2, -5, -1])); // [ -5, 2 ]
*/

// solution method-1
/* function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [min, max];
} */

// solution method-2

/* function minMax(arr) {
  let minValue = Infinity;
  let maxValue = -Infinity;

  for (let item of arr) {
    // find minimum value
    if (item < minValue) {
      minValue = item;
    }
    // find maximum value
    if (item > maxValue) {
      maxValue = item;
    }
  }
  return [minValue, maxValue];
} */

// solution method-2

function minMax(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let minValue = sortedArr[0];
  let maxValue = sortedArr[sortedArr.length - 1];

  return [minValue, maxValue];
}
console.log(minMax([2, -1, 5])); // [ -1, 5 ]
console.log(minMax([0, 5, 2])); // [ 0, 5 ]
console.log(minMax([2, -5, -1])); // [ -5, 2 ]
