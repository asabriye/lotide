const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; 1 < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    return false
   }
  }
  return true;
};

assertEqual(eqArrays([1, 2,], [1, 2, 3]));