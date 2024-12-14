function isItANum(str) {

  let numbersOnly = (str.match(/\d+/g) || []).join("");

  if (numbersOnly.length === 11 && numbersOnly.startsWith("0")) {
    return numbersOnly;
  } else {
    return "Not a phone number";
  }


}

console.log(isItANum("S:)0207ERGQREG88349F82!efRF"));