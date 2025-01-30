function increasing_array(arr) {

  let counter = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let minus = arr[i - 1] - arr[i];
      arr[i] = arr[i - 1]
      counter += minus;
    }
  }

  return counter;

}

console.log(increasing_array([3, 2, 5, 1, 7]));
