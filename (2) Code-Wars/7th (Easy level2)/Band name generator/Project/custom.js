function bandNameGenerator(str) {

  let result = "";
  let firstUpper = str.charAt(0).toUpperCase();
  if (str[0] === str[str.length - 1]) {
    result = `${firstUpper}${str.slice(1, -1)}${str}`;
  } else {
    result = `The ${firstUpper + str.slice(1).toLowerCase()}`;
  }

  return result;

}



console.log(bandNameGenerator("tart"));