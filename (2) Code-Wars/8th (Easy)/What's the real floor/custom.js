function getRealFloor(n) {
  if (n === 0 || n === 13) {
    return 0;
  } else if (n < 0) {
    return n;
  } else if (n < 13) {
    return n - 1;
  } else if (n > 13) {
    return n - 2;
  }
}


console.log(getRealFloor(0));  // 0









