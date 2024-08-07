function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });  
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));