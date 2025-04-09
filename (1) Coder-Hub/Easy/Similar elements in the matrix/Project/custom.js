function get_duplicate_elements(arr) {

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }

  let uniqueElements = [...new Set(result)];
  return uniqueElements;

}

console.log(get_duplicate_elements([10, 5, 9, 5, 4, 4, 3]));