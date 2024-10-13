function doubleOdds(arr) {

  let result = arr.map(function(element, index, array) {
    let finalResult;
    if (element % 2 !== 0) {
      finalResult = element * 2;
    } else {
      finalResult = element;
    }
    return finalResult;
  })

  return result;

}

console.log(doubleOdds([1, 2, 3, 4]));