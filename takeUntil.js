const assertEqual = function(actual, expected) {

  if (actual === expected) {
     console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
   } else if (actual !== expected) {
     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
 };


 const takeUntil = function(array, callback) {

  // for (const item in array) {
  //   console.log(callback(item));
  // }
  let result = [];
  for (i = 0; i < array.length; i++) {

    if (!callback(array[i])) {
      result.push(array[i]);
    } else {
      return result;
    }
  }
  return result;
};