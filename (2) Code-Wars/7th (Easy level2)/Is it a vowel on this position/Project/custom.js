function checkVowel(string, position) {

  let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

  for (let i = 0; i < string.length; i++) {
    if (i === position && vowels.includes(string[i])) {
      return true;
    }
  }

  return false;

}



console.log(checkVowel('Amanda', 2));