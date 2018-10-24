function countLetters(ourWord){
  var letterCount = {};
  for (var i = 0; i < ourWord.length; i++) {
    if (letterCount[ourWord[i]] === undefined) {
      letterCount[ourWord[i]] = [];
      letterCount[ourWord[i]].push(i);
    } else {
      letterCount[ourWord[i]].push(i);
    }
  }
return letterCount;
}

console.log(countLetters("hello there"));
