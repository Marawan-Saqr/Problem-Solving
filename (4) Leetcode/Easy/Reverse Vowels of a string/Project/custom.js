var reverseVowels = function(s) {
  let vowelsCharacters = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let lowerWord = s;
  let vowelsNeeded = "";


  for (let i = 0; i < lowerWord.length; i++) {
    if (vowelsCharacters.includes(lowerWord[i])) {
      vowelsNeeded += lowerWord[i];
    }
  }


  let reversedVowels = vowelsNeeded.split("").reverse();
  let result = "";
  let vowelIndex = 0;


  for (let i = 0; i < lowerWord.length; i++) {
    if (vowelsCharacters.includes(lowerWord[i])) {
      result += reversedVowels[vowelIndex];
      vowelIndex++;
    } else {
      result += lowerWord[i];
    }
  }

  return result;

}

console.log(reverseVowels("IceCreAm"));