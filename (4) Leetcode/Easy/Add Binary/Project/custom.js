var addBinary = function(a, b) {
  let numberOne = BigInt('0b' + a);
  let numberTwo = BigInt('0b' + b);

  let sum = numberOne + numberTwo;

  return sum.toString(2);
}

console.log(addBinary("11", "1"));