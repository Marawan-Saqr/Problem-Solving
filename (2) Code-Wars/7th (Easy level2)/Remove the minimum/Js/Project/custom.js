function removeSmallest(numbers) {

  if (numbers.length === 0) {
    return [];
  }

  let minNumber = Math.min(...numbers);
  let minIndex = numbers.indexOf(minNumber);
  let result = [...numbers];

  result.splice(minIndex, 1);
  return result;

}

console.log(removeSmallest([2, 2, 1, 2, 1]));