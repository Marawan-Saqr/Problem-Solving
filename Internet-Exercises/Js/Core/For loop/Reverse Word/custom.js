function reversedString(string) {
  let emptySring = "";
  for (let i = string.length - 1; i >= 0; i--) {
    emptySring += string[i];
  }
  return emptySring;
}



console.log(reversedString("Hello World"));
























