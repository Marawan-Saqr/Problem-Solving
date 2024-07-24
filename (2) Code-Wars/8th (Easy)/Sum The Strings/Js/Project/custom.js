function sumStr(a, b) {
  if (a === "") {
    a = "0";
  }
  if (b === "") {
    b = "0";
  }

  let firstElement = parseInt(a);
  let secondElement = parseInt(b);
  let result = firstElement + secondElement;
  let final = result.toString();
  
  return final;
}

console.log(sumStr("4", "5"))