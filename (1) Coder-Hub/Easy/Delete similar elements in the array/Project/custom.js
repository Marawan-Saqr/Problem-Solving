function remove_duplicate(arr) {

  let uniqueElements = [...new Set(arr)];
  return uniqueElements;

}

console.log(remove_duplicate([7, 8, 9, 7]));
