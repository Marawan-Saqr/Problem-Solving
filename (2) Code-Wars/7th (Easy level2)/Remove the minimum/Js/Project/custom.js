function removeSmallest(numbers) {
  let theSmallest = Math.min(...numbers);
  let index = numbers.indexOf(theSmallest);

  if (index !== -1) {
    return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
  }

  return numbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));