String.prototype.vowel = function() {

  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  
  if (vowels.includes(this.toString())) {
    return true;
  } else {
    return false;
  }

}



console.log("".vowel());