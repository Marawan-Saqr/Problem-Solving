function evenOnly(arr) {

  let filterNumbers = arr.filter(function(element) {
    return element % 2 === 0;
  })

  return filterNumbers;

}

console.log(evenOnly([1, 11, 23, 22, 90, 16, 12, 40, 50, 43]));