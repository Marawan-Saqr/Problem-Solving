function noBoringZeros(n) {
  let converted = n.toString();
  let splited = converted.split("");
  for (let i = splited.length - 1; i >= 0; i--) {
    if (splited[i] === "0") {
      splited.pop();
    } else {
      break;
    }
  }
  return Number(splited.join(""));
}


console.log(noBoringZeros(145000));