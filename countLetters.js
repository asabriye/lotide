//assertEqual("6", "2");
  //assertEqual(1, 1);

  const countLetters = function (words) {
    const obj = {} // this is where the letters are stored
     for (let i =0; i < words.length; i ++) { // looping through the string
      let letter = words[i]; // declaring letter as each index in the string 
     if (obj[letter]) { // if statment to see if obj(letter)
       obj[letter] ++ 
     }
     else {
       obj[letter] = 1
     }
     }
   return obj
   } 
   console.log (countLetters("lighthouse in the house"))