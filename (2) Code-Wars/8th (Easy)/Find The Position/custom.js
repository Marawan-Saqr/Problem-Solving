function position(letter) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  if (alphabet.includes(letter)) {
    let position = alphabet.indexOf(letter.toLowerCase()) + 1;
    return `Position of alphabet: ${position}`;
  }
}

console.log(position("a"));