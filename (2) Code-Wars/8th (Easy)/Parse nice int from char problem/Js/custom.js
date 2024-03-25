function getAge(inputString){
  let splited = inputString.split(" ");
  let firstNumber = parseInt(splited[0]);
  let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (numbersArray.includes(firstNumber)) {
    return firstNumber;
  } else {
    return "Error age";
  }
}

console.log(getAge("10 years old"));