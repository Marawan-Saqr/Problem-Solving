function returnStringLetters(string1, string2) {
  if (string1.length > string2.length) {
    return string1.length;
  } else if (string1.length < string2.length) {
    return string2.length;
  } else {
    return string1.length || string2.length;
  }
}

console.log(returnStringLetters("Marawan", "Mahmoud"));