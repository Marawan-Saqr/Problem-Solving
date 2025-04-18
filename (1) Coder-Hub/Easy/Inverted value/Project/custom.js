function isMirrored(num) {

  let stringed = num.toString();
  let inverted = stringed.split("").reverse().join("");

  return stringed === inverted;


}

console.log(isMirrored(121));