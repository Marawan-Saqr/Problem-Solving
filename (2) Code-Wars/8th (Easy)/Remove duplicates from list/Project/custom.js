function distinct(a) {

  let uniqueElements = [...new Set(a)];
  return uniqueElements;

}



console.log(distinct([1, 2, 1, 1, 3, 2]));