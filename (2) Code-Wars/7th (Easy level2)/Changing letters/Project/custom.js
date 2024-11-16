function swap (string) {

  let vowelsCharacters = ["a", "e", "i", "o", "u"];
  let result = "";


  for (let i = 0; i < string.length; i++) {
    if (vowelsCharacters.includes(string[i])) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }

  return result;

}



console.log(swap("Hello World"));