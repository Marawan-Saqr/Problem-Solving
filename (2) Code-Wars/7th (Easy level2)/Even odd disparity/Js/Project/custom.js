function solve(a){

  let evenCount = 0;
  let oddCount = 0;
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") {
      if (a[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  result = evenCount - oddCount;

  return result;

}

console.log(solve([13, 6, 8, 15, 4, 8, 13]));