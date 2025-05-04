let userInput = prompt("Please Enter Number To Factorial");
let numberUserInput = parseInt(userInput);


if (numberUserInput < 0) {
  console.log("Error Cant Factorial Negative Number");
} else {
  let sum = 1;
  while (numberUserInput > 0) {
  sum *= numberUserInput;
  numberUserInput--;
  }
  console.log(sum);
}