function adjacentElementsProduct(array) {

  let result = array[0] * array[1];

  for (let i = 0; i < array.length - 1; i++) {
    if (result < (array[i] * array[i + 1])) {
      result = array[i] * array[i + 1];
    }
  }

  return result;

}



console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));