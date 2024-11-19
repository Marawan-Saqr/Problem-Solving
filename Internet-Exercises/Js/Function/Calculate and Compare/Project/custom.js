let calculateSquare = (num) => {

  let powerOfNum = Math.pow(num, 2);
  return powerOfNum;

}


let compareSquares = (a, b) => {

  let square = calculateSquare(a);
  let square2 = calculateSquare(b);

  if (square > square2) {
    return `${square} > ${square2}`;
  } else if (square < square2) {
    return `${square} < ${square2}`;
  } else {
    return `${square} = ${square2}`;
  }

}



console.log(compareSquares(4, 3));