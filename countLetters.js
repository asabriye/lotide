//assertEqual("6", "2");
  //assertEqual(1, 1);

  const assertEqual = function(actual, expected) {

    if (actual === expected) {
       console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
     } else if (actual !== expected) {
       console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    }
   };

const eqArrays = function(arr1, arr2) {

  let i = 0;
  let answer = Boolean;

  for (i = 0; i < arr1.length; i++) {

    if (arr1.length === arr2.length) {
      if (arr1[i] === arr2[i]) {
        answer = true;
      } else if (arr1[i] !== arr2[i]) {
        answer = false;
      }
    } else {
      answer = false
    }
  }
  return answer;

};

assertEqual(eqArrays([1, 2, 3], [1, 2, 9]), false)

  const countLetters = function (words) {
    const obj = {} // store letters in here
     for (let i =0; i < words.length; i ++) { // loop through the string
      let letter = words[i]; // declaring letter as each index in the string 
     if (obj[letter]) { // statement to see if obj(letter) is true
       obj[letter] ++ 
     }
     else {
       obj[letter] = 1
     }
     }
   return obj
   } 
   console.log (countLetters("Hello"))