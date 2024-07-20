function d01(a, b) {
  const xorResult = a ^ b;
  if (xorResult) {
    return false;
  } else {
    return true;
  }
}

console.log(d01(77, 90));