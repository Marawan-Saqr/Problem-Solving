function extraPerfect(n){

  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }

  return result;


}





console.log(extraPerfect(3));