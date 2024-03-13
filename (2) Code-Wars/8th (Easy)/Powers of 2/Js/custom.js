function powersOfTwo(n){
  let emptyArray = [];
  for (let i = 0; i <= n; i++) {
    let powerNumber = Math.pow(2, i);
    emptyArray.push(powerNumber);
  }
  return emptyArray;
}


console.log(powersOfTwo(1));








