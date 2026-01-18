function operation(num1, num2) {

  if (num1 / num2 === 24) {
    return "divided";
  } else if (num1 * num2 === 24) {
    return "multiplied";
  } else if (num1 + num2 === 24) {
    return "added";
  } else if (num1 - num2 === 24) {
    return "subtracted";
  } else {
    return "None";
  }

}


console.log(operation(3, 8));