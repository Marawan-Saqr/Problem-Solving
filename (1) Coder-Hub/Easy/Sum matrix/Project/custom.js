function calculate_sum(array) {

  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      break;
    } else {
      result += array[i];
    }
  }

  return result;

}

console.log(calculate_sum([1, 2, 7, 4, 6]));