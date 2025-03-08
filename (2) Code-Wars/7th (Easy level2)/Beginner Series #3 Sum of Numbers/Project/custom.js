function getSum(a, b) {

  if (a === b) {
    return a;
  }


  let result = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    result += i;
  }

  return result;

}



console.log(getSum(0, -1));