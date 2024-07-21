function makeUpperCase(str) {

  let newResult = "";
  for (let i = 0; i < str.length; i++) {
    newResult += str[i].toUpperCase();
  }

  return newResult;

}

console.log(makeUpperCase("hello"));