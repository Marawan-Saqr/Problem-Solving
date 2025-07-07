const nums = [4, 1, 7, 2, 9, 8, 3];

let oddEvenSorted = [...nums].sort((a, b) => {
  if (a % 2 !== b % 2) {
    return a % 2 === 1 ? -1 : 1;
  }
  return a - b;
});

console.log(oddEvenSorted);