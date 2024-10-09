function calculateLengths(array) {

  let result = array.map(function(element, index, array) {
    let finalResult = element.length;
    return finalResult;
  })

  return result;

}

console.log(calculateLengths(["hello", "world"]));