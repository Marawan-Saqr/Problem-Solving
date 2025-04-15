function returnStringLetters(string1, string2) {

  let numberOne = string1.length;
  let numberTwo = string2.length;

  return Math.max(numberOne, numberTwo);

}

console.log(returnStringLetters("Marawan", "Mahmoud"));