//23. function that takes an array of non-negative integers and strings and return a new array without the strings.

/* 

 function filterArray(arr){
      //Write Your solution Here
};


console.log(filterArray([1, 'z', 4, 5, 'i', 9, 'm'])); //[ 1, 4, 5, 9 ]
console.log(filterArray([8, 'z', 1, '8', 'i', 9, 'm'])); //[ 8, 1, 9 ]
console.log(filterArray([7, '1', 'z', 0, 'i', 9, 'm'])); //[ 7, 0, 9 ]

*/

// 1st method
// function filterArray(arr) {
//   let filteredArray = arr.filter((el) => {
//     return typeof el === "number";
//   });

//   return filteredArray;
// }

// 2nd method

/* function filterArray(arr) {
  let filteredArray = [];

  arr.map((el) => {
    if (typeof el === "number") {
      return filteredArray.push(el);
    }
  });

  return filteredArray;
} */

// 3rd method
function filterArray(arr) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

console.log(filterArray([1, "z", 4, 5, "i", 9, "m"])); //[ 1, 4, 5, 9 ]
console.log(filterArray([8, "z", 1, "8", "i", 9, "m"])); //[ 8, 1, 9 ]
console.log(filterArray([7, "1", "z", 0, "i", 9, "m"])); //[ 7, 0, 9 ]
