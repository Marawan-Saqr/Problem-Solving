function getSum(a, b) {

  if (a === b) {
    return a;
  }


  let result = 0;
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;

}




console.log(getSum(-1, 2));