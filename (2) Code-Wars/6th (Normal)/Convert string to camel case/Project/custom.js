function toCamelCase(str) {

  let result = "";
  let isCapital = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      result += str[i + 1].toUpperCase();
      isCapital = true;
    } else {
      if (isCapital === false) {
        result += str[i];
      }
      isCapital = false;
    }
  }

  return result;

}



console.log(toCamelCase("the_stealth_warrior"));