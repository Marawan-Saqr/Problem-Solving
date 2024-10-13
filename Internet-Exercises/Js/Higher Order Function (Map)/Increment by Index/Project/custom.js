function incrementByIndex(array) {

  let result = array.map(function(element, index, array) {

    let finalResult = element + index;
    return finalResult;

  })

  return result;

}

console.log(incrementByIndex([3, 7, 2, 0]));