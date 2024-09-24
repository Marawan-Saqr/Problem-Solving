function solve(a){

  let evenCount = 0;
  let oddCount = 0;
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number" && a[i] % 2 === 0) {
      evenCount++;
    } else if (typeof a[i] === "number" && a[i] % 2 !== 0) {
      oddCount++;
    }
  }

  result = evenCount - oddCount;
  return result;

}

console.log(solve([5, 15, 16, 10, 6, 4, 16, 't', 13, 'n', 14, 'k', 'n', 0, 'q', 'd', 7, 9]));