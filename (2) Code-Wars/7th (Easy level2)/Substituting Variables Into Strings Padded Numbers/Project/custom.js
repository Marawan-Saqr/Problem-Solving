function solution(value) {

  let formatedInputs = 5;
  let convertToString = value.toString().split("");

  while (convertToString.length !== formatedInputs) {
    convertToString.unshift("0");
  }

  return `Value is ${convertToString.join("")}`;

}


console.log(solution(1204));