function toCurrency(price) {

  let result = "";
  let stringed = price.toString();
  let counter = 0;


  for (let i = stringed.length - 1; i >= 0; i--) {
    result += stringed[i];
    counter++;
    if (counter === 3) {
      result += ",";
      counter = 0;
    }
  }

  if (result.endsWith(",")) {
    return result.slice(0, -1).split("").reverse().join("");
  } else {
    return result.split("").reverse().join("");
  }

}


console.log(toCurrency(123456789012));