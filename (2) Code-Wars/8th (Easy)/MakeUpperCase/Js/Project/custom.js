function makeUpperCase(str) {

  let result = str.split("").map((element)=> {
    return element.toUpperCase();
  });

  return result.join("");

}

console.log(makeUpperCase("hello"));