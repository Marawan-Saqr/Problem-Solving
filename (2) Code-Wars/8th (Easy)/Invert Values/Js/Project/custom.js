function invert(array) {

  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * - 1);
  }

  return result;

}

console.log(invert([1, -2, 3, -4, 5]));