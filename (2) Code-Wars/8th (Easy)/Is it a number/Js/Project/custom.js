function isDigit(s) {

  return !isNaN(s) && s.trim() !== '';
}

console.log(isDigit("3 5"));