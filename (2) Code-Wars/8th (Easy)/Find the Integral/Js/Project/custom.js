function integrate(coefficient, exponent) {

  let newExponent = exponent + 1;
  let newCofficient = coefficient / newExponent;
  return `${newCofficient}x^${newExponent}`;

}

console.log(integrate(3, 2));