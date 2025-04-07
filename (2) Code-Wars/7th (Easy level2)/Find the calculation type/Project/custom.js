function calcType(a, b, res) {

  if (a + b === res) {
    return "addition";
  } else if (a * b === res) {
    return "multiplication";
  } else if (a / b === res) {
    return "division";
  } else {
    return "subtraction";
  }

}



console.log(calcType(1, 2, 3));