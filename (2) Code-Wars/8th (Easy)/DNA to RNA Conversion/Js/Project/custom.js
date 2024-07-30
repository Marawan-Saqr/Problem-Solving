function correct(string) {

  let result = string.split("").map(function(e) {
    if (e === "0") {
      return "O";
    } else if (e === "5") {
      return "S";
    } else if (e === "1") {
      return "I";
    } else {
      return e;
    }
  })

  return result.join("");

}

console.log(correct("L0ND0N"));

///////////////////////////Another Method//////////////////////////////////////
function correct(string){
  let updatedString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].includes("0")) {
      updatedString += string[i].replace("0", "O");
    } else if (string[i].includes("5")) {
      updatedString += string[i].replace("5", "S");
    } else if (string[i].includes("1")) {
      updatedString += string[i].replace("1", "I");
    } else {
      updatedString += string[i];
    }
  }
  return updatedString;
}

console.log(correct("L0ND0N"));