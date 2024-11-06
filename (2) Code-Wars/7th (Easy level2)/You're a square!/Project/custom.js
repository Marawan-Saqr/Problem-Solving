var isSquare = function(n){

  const sqrt = Math.sqrt(n);

  return Number.isInteger(sqrt);

}


console.log(isSquare(9));