function isPangram(string) {

  let alphabeticCharacters = "abcdefghijklmnopqrstuvwxyz";
  let allSmall = string.toLowerCase();
  let uniqueWord = [...new Set(allSmall)].join("");
  let counter = 0;


  for (let i = 0; i < uniqueWord.length; i++) {
    if (alphabeticCharacters.includes(uniqueWord[i])) {
      counter++;
    }
  }


  if (counter === 26) {
    return true;
  } else {
    return false;
  }

}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));