function deleteLastChar(word) {

  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (i !== word.length - 1) {
      result += word[i];
    }
  }

  return result;

}

console.log(deleteLastChar("CoderHub"));