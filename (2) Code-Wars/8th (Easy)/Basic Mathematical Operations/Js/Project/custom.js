function basicOp(operation, value1, value2){

  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  } else {
    return "False Opration";
  }

}



console.log(basicOp('+', 4, 7));