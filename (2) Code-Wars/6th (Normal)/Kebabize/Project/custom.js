function kebabize(str) {

  const regex = /\d/;
  let newString = "";
  if (regex.test(str)) {
    newString = str.replace(/\d/g, '');
  } else {
    newString = str;
  }


  let result = "";
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === newString[i].toUpperCase()) {
      result += "-" + newString[i].toLowerCase();
    } else {
      result += newString[i].toLowerCase();
    }
  }

  if (result.startsWith("-")) {
    return result.slice(1);
  } else if (result.endsWith("-")) {
    return result.slice(-1);
  } else {
    return result;
  }

}



console.log(kebabize("myCamelCasedString"));