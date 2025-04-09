function solve(arr) {

  let sorted = arr.sort((a, b)=> b - a);
  let result = [];
  for (let i = 0; i < Math.floor(sorted.length / 2); i++) {        // [9, 8, 7, 6, 4, 3, 2]
    result.push(sorted[i], sorted[sorted.length - 1 - i]);
  }

  if (sorted.length % 2 !== 0) {
    result.push(sorted[Math.floor(sorted.length / 2)]);
  }

  return result;

}


console.log(solve([6, 9, 4, 3, 7, 8, 2]));