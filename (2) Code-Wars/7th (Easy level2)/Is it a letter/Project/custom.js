function isItLetter(character) {

  let isChar = /^[a-zA-Z]+$/.test(character);
  return isChar;

}

console.log(isItLetter('1'));