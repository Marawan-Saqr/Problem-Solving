function Decimal_places(num) {

  let counter = 0;
  for (let i = num.length - 1; i > 0; i--) {
    if (num.includes(".")) {
      if (num[i] !== ".") {
        counter++;
      }
    } else {
      return 0;
    }
  }

  return counter;

}


console.log(Decimal_places("3.967"));
console.log(Decimal_places("2.9"));
console.log(Decimal_places("200"));
console.log(Decimal_places("5.19054"));