function allSameCase(word) {

  let convertUpper = word.toUpperCase();  // HELLO
  let convertLower = word.toLowerCase();  // hello

  if (word === convertUpper) {
    return true;
  } else if (word === convertLower) {
    return true;
  } else {
    return false;
  }

}


console.log(allSameCase("Hello"));