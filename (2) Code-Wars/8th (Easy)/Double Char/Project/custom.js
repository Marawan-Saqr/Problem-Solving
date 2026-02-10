function doubleChar(str) {

  let result = str.split("").map((element)=> {
    return `${element}${element}`;
  })
  return result.join("");

}

console.log(doubleChar("String"));