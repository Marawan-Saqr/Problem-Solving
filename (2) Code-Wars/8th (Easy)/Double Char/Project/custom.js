function doubleChar(str) {

  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].repeat(2);
  }

  return result;

}

console.log(doubleChar("String"));