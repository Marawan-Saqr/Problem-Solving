function solve(arr) {

  let result = [];
  let lowering = arr.map(word => word.toLowerCase());
  let counter = 0;

  for (let i = 0; i < lowering.length; i++) {
    counter = 0;
    for (let j = 0; j < lowering[i].length; j++) {
      if (j === lowering[i][j].charCodeAt(0) - 97) {
        counter++;
      }
    }
    result.push(counter);
  }

  return result;

}


console.log(solve(["abode", "ABc", "xyzD"]));