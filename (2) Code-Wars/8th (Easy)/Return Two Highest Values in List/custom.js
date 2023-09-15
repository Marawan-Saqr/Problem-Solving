function twoHighest(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let maxNumber = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > maxNumber) {
      secondMax = maxNumber;
      maxNumber = num;
    } else if (num < maxNumber && num > secondMax) {
      secondMax = num;
    }
  }

  if (secondMax === -Infinity) {
    return [maxNumber];
  }

  return [maxNumber, secondMax];
}

console.log(twoHighest([15])); // Output: [15]
console.log(twoHighest([20, 17, 20])); // Output: [20, 17]