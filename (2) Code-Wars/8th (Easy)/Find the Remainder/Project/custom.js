function remainder(a, b) {
  
  if (a > b) {
    return a % b;
  } else {
    return b % a;
  }

}


console.log(remainder(17, 5));