function climb(n){

  let result = [];
  while(n > 1) {
    if (n % 2 === 0) {
      result.push(n);
      n = n / 2;
    } else {
      result.push(n);
      n = (n - 1) / 2;
    }
  }

  result.push(1);
  return result.reverse();

}




console.log(climb(13));