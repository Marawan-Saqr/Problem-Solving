function solve(arr){  

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowering = arr.map(word => word.toLowerCase());
  let counter = 0;
  let result = [];

  for (let i = 0; i < lowering.length; i++) {
    counter = 0;
    for (let j = 0; j < lowering[i].length; j++) {
      if (alphabet[j] === lowering[i][j]) {
        counter++;
      }
    }
    result.push(counter);
  }

  return result;

}

console.log(solve(["abode", "ABc", "xyzD"]));