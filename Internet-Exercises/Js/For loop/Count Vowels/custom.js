function countVowels(Word){
  let vowelsArray = ["a", "A" , "e", "E", "i", "I", "o", "O", "u", "U"];
  let result = 0;
  for (let i = 0; i < Word.length; i++) {
    if (vowelsArray.includes(Word[i])) {
      result += 1;
    }
  }
  return result;
}


console.log(countVowels("Marawan Saqr"));

























