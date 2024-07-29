function sumArray(array) {

  if (array.length <= 1) {
    return 0;
}

  let sorted = array.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[0] && sorted[i] !== sorted[sorted.length - 1]) {
      result += sorted[i];
    }
  }

  return result;

}

console.log(sumArray([6, 2, 1, 8, 10]));

/////////////////////////////Another Solution/////////////////////////////////////////////////////

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

console.log(sumArray([6, 2, 1, 8, 10]));