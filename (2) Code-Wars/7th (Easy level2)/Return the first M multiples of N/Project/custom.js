function multiples(m, n){

  let result = [];
  for (let i = 1; i <= m; i++) {
    result.push(i * n);
  }

  return result;

}


console.log(multiples(3, 5.0));