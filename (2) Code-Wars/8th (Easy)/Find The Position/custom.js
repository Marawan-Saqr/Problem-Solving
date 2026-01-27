function position(letter) {

  let result = letter.charCodeAt(0) - 97 + 1;
  return `Position of alphabet: ${result}`;

}

console.log(position("a"));