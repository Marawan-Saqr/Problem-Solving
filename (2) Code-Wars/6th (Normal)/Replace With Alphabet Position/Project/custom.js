function alphabetPosition(text) {

  let result = "";
  let allSmall = text.toLowerCase();
  for (let i = 0; i < allSmall.length; i++) {
    let charCode = allSmall[i].charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      result += (charCode - 97 + 1) + " ";
    }
  }

  return result.trim();

}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));