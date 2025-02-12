function isAlt(word) {

  let ordinary = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let vowels = ["a", "e", "i", "o", "u"];


  for (let i = 1; i < word.length; i++) {
    if (ordinary.includes(word[i]) && ordinary.includes(word[i - 1])) {
      return false;
    } else if (vowels.includes(word[i]) && vowels.includes(word[i - 1])) {
      return false;
    }
  }

  return true;

}


console.log(isAlt("mn"));