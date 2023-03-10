//16. Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
/* 

function canNest(arr1, arr2){
    //Write Your solution Here
};


console.log(canNest([3, 1], [4, 0])); // true
console.log(canNest([9, 9, 8], [8, 9])); // false
console.log(canNest([1, 2, 3, 4], [0, 6])); // true */

///==========================Solution================////

function canNest(arr1, arr2) {
  let arr1Min = Math.min(...arr1);
  let arr1Max = Math.max(...arr1);
  let arr2Min = Math.min(...arr2);
  let arr2Max = Math.max(...arr2);
  if (arr1Min > arr2Min && arr1Max < arr2Max) {
    return true;
  } else {
    return false;
  }
}

console.log(canNest([3, 1], [4, 0])); // true
console.log(canNest([9, 9, 8], [8, 9])); // false
console.log(canNest([1, 2, 3, 4], [0, 6])); // true
