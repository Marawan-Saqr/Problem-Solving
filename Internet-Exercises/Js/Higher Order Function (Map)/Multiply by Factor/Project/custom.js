function multiplyByFactor(array, factor) {

  let result = array.map(function(element, index, array) {
    let finalResult = element * factor;
    return finalResult;
  })

  return result;

}

console.log(multiplyByFactor([1, 2, 3], 2));