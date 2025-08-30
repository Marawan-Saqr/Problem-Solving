function correct(string) {

  let updatedString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "0") {
      updatedString += string[i].replace("0", "O");
    } else if (string[i] === "5") {
      updatedString += string[i].replace("5", "S");
    } else if (string[i] === "1") {
      updatedString += string[i].replace("1", "I");
    } else {
      updatedString += string[i];
    }
  }

  return updatedString;

}



console.log(correct("L0ND0N"));