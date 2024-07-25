function countBy(x, n) {

  let newArray = [];

  for (let i = 1; i <= n; i++) {
    newArray.push(i * x)
  }

  return newArray;

}

console.log(countBy(1, 10));