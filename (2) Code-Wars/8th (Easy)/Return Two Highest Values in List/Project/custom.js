function twoHighest(arr) {

  if (arr.length === 0) {
    return [];
  } else if (arr.length <= 1) {
    return arr;
  }


  let uniqueValues = [...new Set(arr)];
  const [valueOne, valueTwo] = uniqueValues.sort((a, b)=> b - a);
  return [valueOne, valueTwo];

}

console.log(twoHighest([15, 20, 20, 17]));