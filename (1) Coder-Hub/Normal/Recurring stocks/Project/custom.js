function arrowDuplicates(word) {

  let result = "";
  let smallChar = word.toLowerCase();

  for (let i = 0; i < smallChar.length; i++) {
    if (smallChar.indexOf(smallChar[i]) === smallChar.lastIndexOf(smallChar[i])) {
      result += ">";
    } else {
      result += "<";
    }
  }

  return result;

}


console.log(arrowDuplicates("Bb")); 