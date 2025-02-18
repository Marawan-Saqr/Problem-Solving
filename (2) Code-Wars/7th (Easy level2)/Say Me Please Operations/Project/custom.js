function sayMeOperations(str) {
  let convertToNumber = str.split(" ").map((element)=> {
    return Number(element);
  });

  console.log(convertToNumber);

  let result = "";
  for (let i = 2; i < convertToNumber.length; i++) {
    let addition = convertToNumber[i - 1] + convertToNumber[i - 2];
    let subtraction = convertToNumber[i - 2] - convertToNumber[i - 1];
    let multiplication = convertToNumber[i - 1] * convertToNumber[i - 2];
    // Operations
    if (convertToNumber[i] === addition) {
      result += "addition, ";
    } else if (convertToNumber[i] === subtraction || convertToNumber[i] === -subtraction) {
      result += "subtraction, ";
    } else if (convertToNumber[i] === multiplication) {
      result += "multiplication, ";
    } else {
      result += "division, ";
    }
  }

  return result.trim().slice(0, -1);
}

console.log(sayMeOperations("12 9 21 0 0 0"));