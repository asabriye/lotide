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
      answer = false;
    }
  }
  return answer;

};

 const eqObjects = function(object1, object2) {
  let result = true 
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false // return false if the length in the Objects are not the same
  } else { 
    for (const key in object1) {
      if( object1[key] !== object2[key]) {
        return false;
      }
      
    }
    return true
    }
  }

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual((eqObjects(ab, ba)), true)
// eqObjects(ab, ba); // => true 

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TESTS

assertObjectsEqual({ a: "1", b: "2" },{ a: "1", b: "2" }); // pass
assertObjectsEqual({ c: "1", d: "2" },{ d: "2", c: "1" }); // pass
assertObjectsEqual({ c: "1", d: "2", f: [1,2,3,4] },{ d: "2", c: "1", f: "1,2,3,4"}); // fail