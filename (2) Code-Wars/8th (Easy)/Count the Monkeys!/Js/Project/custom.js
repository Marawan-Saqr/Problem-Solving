function monkeyCount(n) {

  let newResult = [];

  for (let i = 1; i <= n; i++) {
    newResult.push(i);
  }

  return newResult;

}

console.log(monkeyCount(5));