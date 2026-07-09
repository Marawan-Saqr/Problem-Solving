function isItLetter(character) {

  return /^[a-zA-Z]+$/.test(character);

}

console.log(isItLetter('1'));