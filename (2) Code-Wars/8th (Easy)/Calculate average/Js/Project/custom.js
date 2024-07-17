function findAverage(array) {

  if (array.length === 0) {
    return 0;
  }

  let result = 0;
  let arrayLength = array.length;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result / arrayLength;

}

console.log(findAverage([1, 1, 1]));