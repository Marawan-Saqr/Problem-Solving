function arrowDuplicates(word) {

  let small = word.toLowerCase();

  let result = "";
  for (let i = 0; i < small.length; i++) {
    if (small.indexOf(small[i]) === small.lastIndexOf(small[i])) {
      result += ">";
    } else {
      result += "<";
    }
  }

  return result;

}


console.log(arrowDuplicates("Bb"));