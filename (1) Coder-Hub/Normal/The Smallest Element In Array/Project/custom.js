function smallest_number(arr) {

  let smallestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (smallestNumber > arr[i]) {
      smallestNumber = arr[i];
    }
  }

  return smallestNumber;

}


console.log(smallest_number([13, 2, 1, 4, 106]));