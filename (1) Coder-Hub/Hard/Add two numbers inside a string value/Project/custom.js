function addStrNums(num1, num2) {

  if (isNaN(num1) && num1.trim() !== '' || isNaN(num2) && num2.trim() !== '') {
    return -1;
  }

  let numberOne = Number(num1);
  let numberTwo = Number(num2);

  let result = numberOne + numberTwo;

  return result.toString();

}




console.log(addStrNums('4', '5'));