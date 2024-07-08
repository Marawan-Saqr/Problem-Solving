function getAge(inputString){

  let splited = inputString.split(" ");
  let convertToNumber = parseInt(splited);
  return convertToNumber;

}

console.log(getAge("4 years old"));