function sumCubes(n){

  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += Math.pow(i, 3);
  }

  return result;

}



console.log(sumCubes(3));