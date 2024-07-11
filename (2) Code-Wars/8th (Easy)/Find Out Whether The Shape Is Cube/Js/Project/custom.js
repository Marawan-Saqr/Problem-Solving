function cubeChecker(volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  } else {
    if (volume === side * side * side) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(cubeChecker(125, 5));
