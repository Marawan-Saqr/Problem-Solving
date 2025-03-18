function vowel2index(str) {

  if (str === "") {
    return "";
  }

  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += i + 1;
    } else {
      result += str[i];
    }
  }

  return result;

}




console.log(vowel2index("this is my string"));