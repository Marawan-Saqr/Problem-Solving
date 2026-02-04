function noBoringZeros(n) {

  if (n === 0) {
    return 0;
  }

  let stringed = n.toString();        // 1450
  let splited = stringed.split("");

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

console.log(noBoringZeros(1450));