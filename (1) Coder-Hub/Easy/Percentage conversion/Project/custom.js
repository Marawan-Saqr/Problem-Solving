function convertPercent(percentage) {

  let decimalNumber = parseInt(percentage) / 100;
  return decimalNumber;

}



console.log(convertPercent("30%"));
console.log(convertPercent("50%"));
console.log(convertPercent("20%"));
console.log(convertPercent("10%"));