function sumDigits(number) {

  let convertToString = Math.abs(number).toString();

  let result = 0;
  for (let i = 0; i < convertToString.length; i++) {
    result += parseInt(convertToString[i], 10);
  }

  return result;

}




console.log(sumDigits(-32));