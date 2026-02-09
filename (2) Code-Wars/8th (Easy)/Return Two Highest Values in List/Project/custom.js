function twoHighest(arr) {

  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return arr;
  }

  let sorted = arr.sort((a, b)=> b - a);    // [20, 20, 17, 15]
  let uniqueValues = [...new Set(sorted)];  // [20, 17, 15]

  let [number1, number2] = uniqueValues;

  return [number1, number2];

}

console.log(twoHighest([15, 20, 20, 17]));