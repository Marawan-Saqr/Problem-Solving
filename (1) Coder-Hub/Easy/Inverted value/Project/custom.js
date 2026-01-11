function isMirrored(num) {

  let stringedNumber = num.toString();
  let invertedNumber = stringedNumber.split("").reverse().join("");

  return stringedNumber === invertedNumber;

}

console.log(isMirrored(121));