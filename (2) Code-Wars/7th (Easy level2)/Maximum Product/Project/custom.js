function adjacentElementsProduct(array) {

  let numbers = [];
  for (let i = 0; i < array.length - 1; i++) {
    numbers.push(array[i] * array[i + 1]);
  }

  return Math.max(...numbers);

}


console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));