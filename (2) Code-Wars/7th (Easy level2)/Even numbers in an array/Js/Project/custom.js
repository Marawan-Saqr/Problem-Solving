function evenNumbers(array, number) {

  let result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
      if (result.length === number) {
        break;
      }
    }
  }

  return result.reverse();

}

console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));