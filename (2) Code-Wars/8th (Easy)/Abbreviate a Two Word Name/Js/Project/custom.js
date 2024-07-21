function abbrevName(name){

  let newResult = "";
  let splitedWord = name.split(" ");
  for (let i = 0; i < splitedWord.length; i++) {
    newResult += `${splitedWord[i][0]}.`;
  }

  let resultSplited = newResult.split("");
  resultSplited.pop();
  return resultSplited.join("").toUpperCase();

}

console.log(abbrevName("Sam Harris"));