const sum = matrix => matrix.reduce((totalSum, line, i) => {
  return totalSum + line[i] + line[matrix.length - i - 1];
}, 0);

console.log(sum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
