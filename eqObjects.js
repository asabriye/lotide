const assertEqual = function(actual, expected) {

  if (actual === expected) {
     console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
   } else if (actual !== expected) {
     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
 };
 const eqObjects = function(object1, object2) {
  let result = true
  if (object1.length !== object2.length) {
    return false 
  }
 console.log(result)
 {Object.keys(object1) 
  console.log 

}




}


  const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true 
