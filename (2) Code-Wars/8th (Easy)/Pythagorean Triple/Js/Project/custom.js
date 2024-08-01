function isPythagoreanTriple(integers) {

  let sorted = integers.sort((a, b) => a - b);

  if (Math.pow(sorted[0], 2) + Math.pow(sorted[1], 2) === Math.pow(sorted[2], 2)) {
    return true;
  } else {
    return false;
  }

}

console.log(isPythagoreanTriple([4, 3, 5]));