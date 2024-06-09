function increasing_array(arr) {
  let counter = 0;
  for (let i = 1; i < arr.length; i++) {             // 2
    if (arr[i] < arr[i - 1]) {                       // 3 < 3
      counter += arr[i - 1] - arr[i];                // 3 - 2
      arr[i] = arr[i - 1];                           // 2 = 3
    }
  }
  return counter;  // 1
}

console.log(increasing_array([3, 2, 5, 1, 7])); // Output should be 6
