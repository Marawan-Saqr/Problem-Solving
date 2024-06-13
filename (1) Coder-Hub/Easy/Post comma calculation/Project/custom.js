function Decimal_places(num) {
  
  let splited = num.split(""); // ["3", ".", "9", "6", "7"]
  let counter = 0;

  for (let i = splited.length - 1; i >= 0; i--) {
    if (splited.includes(".")) {
      if (splited[i] === ".") {
        break;
      } else {
        counter++;
      }
    } else {
      return 0;
    }
  }

  return counter;

}

console.log(Decimal_places("2.9"));