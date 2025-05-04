function uniqueCollection(array) {

  let uniqueElements = new Set(array);
  return uniqueElements;

}


console.log(uniqueCollection([1, 2, 3, 2, 1, 4]));