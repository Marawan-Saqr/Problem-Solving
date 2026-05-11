function multiply(number) {
  return number * Math.pow(5, number > 0 ? number.toString().length : (number * -1).toString().length);
}

console.log(multiply(-3));