var hotpo = function(n){

  let result = 0;
  while(n != 1) {
    if(n % 2 == 0) n = n / 2;
    else if (n % 2 == 1) n = 3 * n + 1;
    result++;
  }
  return result;

}

console.log(hotpo(5));