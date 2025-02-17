function squarePi(digits) {

  let pi = 31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679n;
  let stringedPi = pi.toString();

  let digitsNeeded = [];
  for (let i = 0; i < digits; i++) {
    digitsNeeded.push(stringedPi[i]);
  }

  let squared = digitsNeeded.map((element)=> {
    return Number(Math.pow(element, 2));
  }).reduce((acc, current)=> {
    return acc + current;
  }, 0)

  return Math.ceil(Math.sqrt(squared));

}



console.log(squarePi(10));
