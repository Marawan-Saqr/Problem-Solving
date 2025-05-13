function groupByCommas(n) {

  let stringed = n.toString();
  if (stringed.length <= 3) {
    return stringed;
  }


  let counter = 0;
  let result = "";
  for (let i = stringed.length - 1; i >= 0; i--) {
    result += stringed[i];
    counter++;
    if (counter === 3) {
      result += ",";
      counter = 0;
    }
  }


  if (result.endsWith(",")) {
    let sliced = result.slice(0, -1);
    return sliced.split("").reverse().join("");
  } else {
    return result.split("").reverse().join("");
  }

}


console.log(groupByCommas(1234));