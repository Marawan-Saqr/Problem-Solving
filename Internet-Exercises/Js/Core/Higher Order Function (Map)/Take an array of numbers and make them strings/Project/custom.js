function stringItUp(arr){

  let result = arr.map(function(element, index, array) {
    let newResult = element.toString();
    return newResult;
  }, 100)

  return result;

}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]