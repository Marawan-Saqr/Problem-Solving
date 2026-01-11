function returnStringLetters(string1, string2) {

  let stringOneLength = string1.length;
  let stringTwoLength = string2.length;

  return Math.max(stringOneLength, stringTwoLength);

}

console.log(returnStringLetters("Marawan", "Mahmoud"));