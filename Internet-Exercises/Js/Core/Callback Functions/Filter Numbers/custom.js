function filterArray(arr, callback) {

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;

}


console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(num) {
  return num % 2 === 0;
}));