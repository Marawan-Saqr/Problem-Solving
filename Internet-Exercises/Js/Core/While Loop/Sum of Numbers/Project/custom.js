let userInput = prompt("Please Enter A Number");
let numberedResult = parseInt(userInput);
let total = 0;


while(numberedResult > 0) {

  total += numberedResult;
  userInput = prompt("Please Enter Another Number Or 0 To Stop");
  numberedResult = parseInt(userInput);

}

console.log(total);