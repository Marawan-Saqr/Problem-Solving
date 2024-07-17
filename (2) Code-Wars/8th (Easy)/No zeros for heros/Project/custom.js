function noBoringZeros(n) {

  if (n === 0) {
    return 0;
  }

  let converted = n.toString(); // "1450"
  let splited = converted.split(""); // ["1", "4", "5", "0"]
  for (let i = splited.length - 1; i >= 0; i--) {
    if (splited[i] === "0") {
      splited.pop();
    } else {
      break;
    }
  }

  let joined = splited.join("");
  return parseInt(joined);

}

console.log(noBoringZeros(0));