function arrowDuplicates(word) {

  let lowerAll = word.toLowerCase();
  let result = "";

  for (let i = 0; i < lowerAll.length; i++) {
    if (lowerAll.indexOf(lowerAll[i]) === lowerAll.lastIndexOf(lowerAll[i])) {
      result += ">";
    } else {
      result += "<";
    }
  }

  return result;

}


console.log(arrowDuplicates("SAFCSP"));