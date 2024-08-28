function elevatorDistance(array) {

  let result = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      result += array[i] - array[i + 1];
    } else if (array[i] < array[i + 1]) {
      result += array[i + 1] - array[i];
    }
  }

  return result;

}

console.log(elevatorDistance([5, 2, 8]));