function convertToBoolean(arr){

  let result = arr.map(function(element, index, array) {

    if (typeof element !== "number" || element === 0) {
      return false;
    } else {
      return true;
    }
  })

  return result;

}

console.log(convertToBoolean([0, 1, 2, '']));