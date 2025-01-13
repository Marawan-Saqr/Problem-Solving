function insertDashII(num) {

  if (num < 0) {
    return -1;
  }

  let stringed = num.toString();
  let result = "";

  for (let i = 0; i < stringed.length; i++) {
    if (i === 0) {
      result += stringed[i];
    } else {
      if (stringed[i] === "0") {
        result += stringed[i];
      } else if (stringed[i] % 2 === 0 && stringed[i - 1] === "0") {
        result += stringed[i];
      }
      else if (stringed[i] % 2 === 0 && stringed[i - 1] % 2 === 0) {
        result += "*";
        result += stringed[i];
      } else if (stringed[i] % 2 !== 0 && stringed[i - 1] % 2 !== 0) {
        result += "-";
        result += stringed[i];
      } else if (stringed[i] % 2 === 0 && stringed[i - 1] % 2 !== 0) {
        result += stringed[i];
      } else if (stringed[i] % 2 !== 0 && stringed[i - 1] % 2 === 0) {
        result += stringed[i];
      }
    }
  }

  return result;

}




console.log(insertDashII(108015));