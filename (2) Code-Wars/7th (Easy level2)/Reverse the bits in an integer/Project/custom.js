function reverseBits(n) {

  let binaryCode = n.toString(2);

  let reversedBinary = binaryCode.split("").reverse().join("");

  return parseInt(reversedBinary, 2);

}



console.log(reverseBits(417));