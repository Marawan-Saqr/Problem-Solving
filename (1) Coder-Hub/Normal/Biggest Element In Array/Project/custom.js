function max_element(arr) {

  let maxNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

console.log(max_element([1, 2, 3, 4, 5, 1000]));