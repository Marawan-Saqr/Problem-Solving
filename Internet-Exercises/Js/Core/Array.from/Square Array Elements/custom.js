function squareElements(array) {

  let squaredNumbered = Array.from(array, function(x) {
    return x * x;
  });

  return squaredNumbered;

}




console.log(squareElements([1, 2, 3, 4]));