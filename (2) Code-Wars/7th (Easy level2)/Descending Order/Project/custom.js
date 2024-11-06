function descendingOrder(n){

  let convertToString = n.toString();

  let sorted = convertToString.split("").sort((a, b) => b - a).join("");
  return parseInt(sorted);

}


console.log(descendingOrder(123456789));