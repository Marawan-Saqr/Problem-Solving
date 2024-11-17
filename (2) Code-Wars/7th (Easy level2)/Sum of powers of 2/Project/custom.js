const powers = n => {

  let result = [];
  let i = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      result.push(Math.pow(2, i));
    }
    n = Math.floor(n / 2);
    i++;
  }

  return result;
};


console.log(powers(6));