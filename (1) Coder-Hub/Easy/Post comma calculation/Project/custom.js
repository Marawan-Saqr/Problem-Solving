function Decimal_places(num) {   // Chatgbt Solution
  
  let splited = num.split("");
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

////////////////////////////Another Solution///////////////////////////////////

function Decimal_places(num) {   // My Solution

  let splited = num.toString().split("");

  if (!splited.includes(".")) {
    return 0;
  }

  let counter = 0;
  for (let i = splited.length - 1; i > 0; i--) {
    if (splited[i] !== ".") {
      counter++;
    }
  }

  return counter;

}

console.log(Decimal_places("2.9843"));