function largest_smallest(array_values) {

  let smallestNumber = array_values[0];
  let biggestNumber = array_values[0];
  let result = [];


  for (let i = 0; i < array_values.length; i++) {
    if (smallestNumber > array_values[i]) {
      smallestNumber = array_values[i];
    } else if (biggestNumber < array_values[i]) {
      biggestNumber = array_values[i];
    }
  }

  result.push(biggestNumber);
  result.push(smallestNumber);

  return result;

}


console.log(largest_smallest([5, 1, 2, 4, 9, 10, 200]));