//21. function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

/* 

function charCount(myChar, str){
      //Write Your solution Here
};


console.log(charCount("a", "largest")); //1
console.log(charCount("c", "Chamber of secrets")); // 2
console.log(charCount("b", "big fat bubble")); //4

*/

function charCount(myChar, str) {
  myChar = myChar.toLowerCase();
  str = str.toLowerCase();

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === myChar) {
      count += 1;
    }
  }

  return count;
}

console.log(charCount("a", "largest")); //1
console.log(charCount("c", "Chamber of secrets")); //
console.log(charCount("b", "big fat bubble")); //4
