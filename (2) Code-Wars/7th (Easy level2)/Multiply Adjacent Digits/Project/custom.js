function digitMultiplication(expr) {

  let total = 0;
  let currentProduct = 1;
  let sign = 1;

  for (let i = 0; i < expr.length; i++) {
      const char = expr[i];
      if (!isNaN(Number(char))) {
          currentProduct *= Number(char);
      } else if (char === '+' || char === '-') {
          total += sign * currentProduct;
          currentProduct = 1;
          sign = char === '+' ? 1 : -1;
      }
  }
  total += sign * currentProduct;
  return total;

}



console.log(digitMultiplication("53+5"));