//22. function that takes two parameters and repeats the string n number of times.

/* 

function repetition(txt, n){
      //Write Your solution Here
};


console.log(repetition('zim', 5)); //zimzimzimzimzim
console.log(repetition('zoy', 2)); //zoyzoy
console.log(repetition('akib', 7)); //akibakibakibakibakibakibakib

*/
//1st method
function repetition(txt, n) {
  let repeatTxt = "";
  while (n > 0) {
    repeatTxt += txt;
    n--;
  }
  return repeatTxt;
}

//2nd method
/* function repetition(txt, n) {
  if (n > 0) {
    return txt.repeat(n);
  } else {
    return "";
  }
} */

console.log(repetition("zim", 5)); //zimzimzimzimzim
console.log(repetition("zoy", 2)); //zoyzoy
console.log(repetition("zoy", -2)); //[empty string]
console.log(repetition("akib", 7)); //akibakibakibakibakibakibakib

// this is recursion
