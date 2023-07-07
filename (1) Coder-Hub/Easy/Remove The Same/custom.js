function remove_duplicate(arr) {
  let newArray = arr.map(function(e, index, array) {
    if (array.indexOf(e) === index) {
      return e;
    }
  }).filter(function(e) {
    return e !== undefined;
  });
  
  return newArray;
}

console.log(remove_duplicate([7,8,9,7]));
