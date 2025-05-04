function filterEvenNumbers(arr) {

  let result = arr.filter(function(element) {
    return element % 2 === 0;
  })

  return result;

}


console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));