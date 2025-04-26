function allSameCase(word) {

  let lower = word.toLowerCase();
  let upper = word.toUpperCase();

  if (word === lower || word === upper) {
    return true;
  } else {
    return false;
  }

}


console.log(allSameCase("Hello"));