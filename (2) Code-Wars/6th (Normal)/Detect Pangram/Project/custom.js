function isPangram(string) {
  let charactersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let newResult = [];

  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (charactersArray.includes(string[i])) {
      if (!newResult.includes(string[i])) {
        newResult.push(string[i]);
      }
    }
  }

  newResult.sort();

  if (newResult.length === charactersArray.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));