function appendCurrency(arr){

  let result = arr.map(function(e, i, a) {

    let dollar = '$' + e;
    return dollar;
  }, 10)

  return result;

}

console.log(appendCurrency([1, 2, 3]));