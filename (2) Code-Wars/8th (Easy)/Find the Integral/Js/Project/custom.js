function integrate(coefficient, exponent) {

  let addExponent = exponent + 1;
  let integralFormula = coefficient / addExponent;
  return integralFormula.toString() + "x" + "^" + addExponent.toString();

}

console.log(integrate(3, 2));