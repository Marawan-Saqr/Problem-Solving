function allSameCase(word) {

  let upper = word.toUpperCase();
  let lower = word.toLowerCase();

  if (word === upper || word === lower) {
    return true;
  } else {
    return false;
  }

}


console.log(allSameCase("HI"));