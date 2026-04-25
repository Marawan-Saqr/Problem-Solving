var hotpo = function(n){

  let counter = 0;
  while(n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (3 * n) + 1;
    }
    counter++;
  }

  return counter;

}

console.log(hotpo(5));