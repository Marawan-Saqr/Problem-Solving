function search(word, character) {

  for (let i = 0; i < word.length; i++) {
    if (word[i] === character) {
      return i;
    }
  }

  return -1;

}


console.log(search("cloud", "u"));