function removeSmallest(numbers) {

  let theSmallestIndex = numbers.indexOf(Math.min(...numbers));

  return numbers.filter((_, index) => index !== theSmallestIndex);
}

console.log(removeSmallest([1, 2, 3, 4, 5]));