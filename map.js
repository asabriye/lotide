const assertEqual = function(actual, expected) {

  if (actual === expected) {
     console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
   } else if (actual !== expected) {
     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
 };



const words = ["ground", "control", "to", "major", "tom"];
const map = function(arg1, arg2){ // arg1 is the array itself while
   // arg2 is the callback function
  const result = [] // an empty array to out results in
  for (let item of arg1) {
  result .push(arg2(item))
 return result
  }
}
const results1 = map(words, word => word[0]);
console.log(results1);