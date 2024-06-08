function arrowDuplicates(word) {
  let empty = "";
  let lowerCase = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (lowerCase.indexOf(lowerCase[i]) === lowerCase.lastIndexOf(lowerCase[i])) {
      empty += ">";
    } else {
      empty += "<";
    }
  }
  return empty;
}


console.log(arrowDuplicates("Bb")); 