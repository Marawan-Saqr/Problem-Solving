var isSquare = function(n) {

  if (n < 0) {
    return false;
  }

  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }

}


console.log(isSquare(-1));