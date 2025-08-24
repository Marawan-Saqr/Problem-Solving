function binaryToString(binary) {

  let splitedString = binary.split("0b");   // ['', '1000011', '1100001', '1110100']

  let result = "";
  for (let i = 1; i < splitedString.length; i++) {
    let sum = parseInt(splitedString[i], 2);
    result += String.fromCharCode(sum);
  }

  return result;

}


console.log(binaryToString("0b10000110b11000010b1110100"));