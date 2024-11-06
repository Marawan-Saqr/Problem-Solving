function remove_duplicate(arr) {

  let uniqueElements = new Set(arr);

  let result = [];

  result.push(...uniqueElements);
  return result;

}

console.log(remove_duplicate([7, 8, 9, 7]));
