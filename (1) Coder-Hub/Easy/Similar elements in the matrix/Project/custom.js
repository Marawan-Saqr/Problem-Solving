function get_duplicate_elements(arr) {

  let myUniqueNumbers = new Set();
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (myUniqueNumbers.has(arr[i])) {
      result.push(arr[i]);
    } else {
      myUniqueNumbers.add(arr[i]);
    }
  }

  return result;

}

console.log(get_duplicate_elements([10, 5, 9, 5, 4, 4, 3]));