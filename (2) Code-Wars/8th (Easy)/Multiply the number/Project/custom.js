function multiply(number){
  let numberDigits = Math.abs(number).toString().length;
  return number * Math.pow(5, numberDigits);
}

console.log(multiply(-3));