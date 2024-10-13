function parseToInt(array) {

  let result = array.map((element, index, array) => {
    let finalResult = parseInt(element);
    return finalResult;
  })

  return result;

}

console.log(parseToInt(["2", "5", "10", "43", "4", "2", "5", "31"]));