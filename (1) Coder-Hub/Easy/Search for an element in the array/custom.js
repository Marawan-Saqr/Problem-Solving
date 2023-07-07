
function search(word, character) {
  for (let i = 0; i < word.length; i++) {
    if (word.includes(character)) {
      return word.indexOf(character);
    } else {
      return -1;
    }
  }
}


console.log(search("word", "d"));

















