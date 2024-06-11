function noBoringZeros(n) {
  let converted = n.toString();                    // "960000"
  let splited = converted.split("");               // ["9", "6", "0", "0", "0", "0"]

  for (let i = splited.length - 1; i >= 0; i--) {  // 
    if (splited[i] === "0") {
      splited.pop();
    } else {
      break;
    }
  }

  return Number(splited.join(""));

}

console.log(noBoringZeros(960000));