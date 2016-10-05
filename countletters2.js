// function countLetters (stringToCount) {
//   // set empty object to return
//   var countedLetters = {};
//   //split string into array of words and joined it back together
//   stringToCount = stringToCount.split(" ").join("");
//   // created var char to go through all the characters of the string)
//   for (var i = 0; i < stringToCount.length; i++) {
//     // if character isn't in the object it will be assigned to 1
//    console.log(stringToCount[i], i);

//   }
//   return countedLetters;
// }
// countedLetters.a =


// console.log(countLetters("apple"));

function countLetters (stringToCount) {
  // set empty object to return
  var countedLetters = {};
  //create loop to go through string count
  for (var i in stringToCount) {
    //set char to equal the index of stringToCount ie. 0,1,2
    var char = stringToCount[i];
    //set charObject to
    var charObject = countedLetters[char];
    if (char !== " ") {
      if (charObject === undefined) {
        countedLetters[char] = [i];
      } else {
        charObject.push(i);
      }
    }
  }
  return countedLetters;
}
console.log(countLetters("lighthouse in the house"))
