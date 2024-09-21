function elevatorDistance(array) {

  let counter = 0;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      counter += array[i] - array[i + 1];
    } else if (array[i] < array[i + 1]) {
      counter += array[i + 1] - array[i];
    }
  }

  return counter;

}

console.log(elevatorDistance([5, 2, 8]));