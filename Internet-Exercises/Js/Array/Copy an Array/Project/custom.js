function copyArray(array) {

  let newArray = array.slice(0);

  return newArray;

}

console.log(copyArray([1, 2, 3, 4, 5]));