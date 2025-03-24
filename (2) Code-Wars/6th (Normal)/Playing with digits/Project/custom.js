function digPow(n, p){

  let result = 0;
  let stringed = n.toString().split("");

  for (let i = 0; i < stringed.length; i++) {
    result += Math.pow(Number(stringed[i]), p);
    p++;
  }

  let k = result / n;

  if (Number.isInteger(k)) {
    return k;
  } else {
    return -1;
  }

}



console.log(digPow(46288, 3));