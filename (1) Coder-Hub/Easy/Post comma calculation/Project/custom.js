function Decimal_places(num) {

  let splitedNumber = num.split("");  // ["3", ".", "9", "6", "7"]
  let counter = 0;
  let decimalFound = false;

  for (let i = 0; i < splitedNumber.length; i++) {
    if (splitedNumber[i] === ".") {
      decimalFound = true;
    } else if (decimalFound) {
      counter++;  
    }
  }
  return counter;
}


console.log(Decimal_places("3.967"));