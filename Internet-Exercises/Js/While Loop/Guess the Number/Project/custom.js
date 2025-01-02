let userInput = prompt("Please Enter Number Between 1 And 10");
let numberUserInput = parseInt(userInput);
let theExpectedNumber = 5;


while (numberUserInput !== theExpectedNumber) {

  if (numberUserInput > theExpectedNumber) {
    alert("You Are Bigger Than theExpectedNumber");
  } else if (numberUserInput < theExpectedNumber) {
    alert("You Are Smaller Than theExpectedNumber");
  }

  userInput = prompt("Please Try Again");
  numberUserInput = parseInt(userInput);

}

alert("Well Done You Got It");
console.log(`The Number Is ${theExpectedNumber}`);