function alternate(n, firstValue, secondValue){

  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(firstValue);
    if (result.length === n) {
      break;
    }
    result.push(secondValue);
    if (result.length === n) {
      break;
    }
  }

  return result;

}


console.log(alternate(6, true, false));