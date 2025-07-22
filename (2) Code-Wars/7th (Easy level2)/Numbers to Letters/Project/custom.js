function switcher(x) {

  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "27") {
      result += "!";
    } else if (x[i] === "28") {
      result += "?";
    } else if (x[i] === "29") {
      result += " ";
    } else {
      result += String.fromCharCode(123 - Number(x[i]));
    }
  }

  return result;

}



console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8', '27', '28', '29']));