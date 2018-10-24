function countLetters(ourWord){
//Combine word into single string
  var letterCount = {};
  var joined = ourWord.replace(/\s/g, '');
//split string into single letter - possible loop
  for (var i = 0; i < joined.length; i++) {
    if (letterCount[joined[i]] === undefined) {
      letterCount[joined[i]] = 1;
    } else {
      letterCount[joined[i]]++;
    }
  }
//count each character
//each occurance raises number by 1
//return amount of each character
return letterCount;
}

console.log(countLetters("hello there"));

// var obj ={
//   key: 2
// }

// obj[key]++;
// var temp = obj[key]
// var newTemp = temp + 1
// obj[key] = newTemp;
