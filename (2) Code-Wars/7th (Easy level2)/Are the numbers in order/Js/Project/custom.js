function inAscOrder(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;

}

console.log(inAscOrder([1, 2, 3, 4, 5]));