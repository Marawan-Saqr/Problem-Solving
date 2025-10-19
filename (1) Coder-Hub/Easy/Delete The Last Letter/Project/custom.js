function deleteLastChar(word) {

  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (i !== word.length - 1) {
      newWord += word[i];
    }
  }

  return newWord;

}



console.log(deleteLastChar("CoderHub"));
console.log(deleteLastChar("Marawan"));
console.log(deleteLastChar("Deltabox"));
console.log(deleteLastChar("Egele"));
console.log(deleteLastChar("Programming"));