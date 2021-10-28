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
const middle = function(array) {
  // Assign variable to store what the middle value of the array is
  const middleValue = []
  // if statements to determine the length of arrays
  if ((array.length === 1) || (array.length === 2)) {
    console.log(middleValue);
    return middleValue
  } else if (array.length % 2 === 1) {
    // if the array is odd numbers
    var middle = array[Math.floor(array.length / 2)];
    middleValue.push(middle)
    return middleValue
  } else if (array.length % 2 === 0) {
    // if the array is even numbers
    let firstMiddle = array[Math.floor((array.length - 1) / 2)];
    let secondMiddle = array[Math.floor((array.length + 1) / 2)];
    middleValue.push(firstMiddle)
    middleValue.push(secondMiddle)
    return middleValue
  }
  console.log("array of middle",middleValue);
  return middleValue
}

// middle([1, 2]) 
middle([1, 2, 3, 4, 5]) 
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])