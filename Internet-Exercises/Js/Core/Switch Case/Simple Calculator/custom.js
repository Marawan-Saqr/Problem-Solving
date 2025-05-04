// Simple Calculator
let operation = "+";
let num1 = 15;
let num2 = 5;

switch(operation) {
  case "+":
    console.log(`${num1 + num2}`);
  break;
  case "-":
    console.log(`${num1 - num2}`);
  break;
  case "*":
    console.log(`${num1 * num2}`);
  break;
  case "/":
    console.log(`${num1 / num2}`);
  break;
}