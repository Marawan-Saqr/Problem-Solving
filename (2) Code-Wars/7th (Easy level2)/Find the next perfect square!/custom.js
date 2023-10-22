function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    let nextSquare = Math.pow(sqrt + 1, 2);
    return nextSquare;
  } else {
    return -1;
  }
}

console.log(findNextSquare(121));






