function getLastNElements(array, number) {

  let newArray = array.slice(0);

  return newArray.slice(-number);

}

console.log(getLastNElements([1, 2, 3, 4, 5], 3));