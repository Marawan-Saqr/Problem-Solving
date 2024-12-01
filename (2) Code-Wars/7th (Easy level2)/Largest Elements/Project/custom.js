function largest(n, array) {

  if (n === 0) {
    return [];
  }

  let result = [];
  let sorted = array.sort((a, b) => a - b);

  for (let i = sorted.length - 1; i >= 0; i--) {
    result.push(sorted[i]);
    if (result.length === n) {
      break;
    }
  }

  return result.reverse();

}

console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]));
