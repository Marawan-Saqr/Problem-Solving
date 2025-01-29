function isIsogram(str) {

  let smallCases = str.toLowerCase();

  for (let i = 0; i < smallCases.length; i++) {
    if (smallCases.indexOf(smallCases[i]) !== smallCases.lastIndexOf(smallCases[i])) {
      return false;
    }
  }

  return true;

}



console.log(isIsogram("Dermatoglyphics"));