function digitMultiplication(expr) {

  let result = 1;
  for (let i = 0; i < expr.length; i++) {
    if (!isNaN(expr[i])) {
      result += Number(expr[i]);
    } else if (expr[i] === "+" || expr[i] === "-") {
      
    }
  }
  return result;
}



console.log(digitMultiplication("13579+9+9+9-11"));