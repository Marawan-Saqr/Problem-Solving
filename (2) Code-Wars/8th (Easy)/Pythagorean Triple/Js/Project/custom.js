function isPythagoreanTriple(integers) {
  let sorted = integers.sort((a, b)=> a - b);
  return Math.pow(sorted[0], 2) + Math.pow(sorted[1], 2) === Math.pow(sorted[2], 2) ? true : false;
}

console.log(isPythagoreanTriple([3, 5, 9]));