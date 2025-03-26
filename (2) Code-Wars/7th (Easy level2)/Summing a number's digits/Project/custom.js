function sumDigits(number) {

  let stringed = number.toString();
  let result = 0;

  for (let i = 0; i < stringed.length; i++) {
    if (stringed[i] === "-") {
      result += -0;
    } else {
      result += Number(stringed[i]);
    }
  }

  return result;

}


console.log(sumDigits(-32));