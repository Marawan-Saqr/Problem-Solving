function solve(arr) {
  let result = [];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let allUpper = arr.map(word => word.toUpperCase());
  let counter = 0;


  for (let i = 0; i < allUpper.length; i++) {
    counter = 0;
    for (let j = 0; j < allUpper[i].length; j++) {
      if (alphabet[j] === allUpper[i][j]) {
        counter++;
      }
    }
    result.push(counter);
  }

  return result;
}

console.log(solve(["abode", "ABc", "xyzD"]));
