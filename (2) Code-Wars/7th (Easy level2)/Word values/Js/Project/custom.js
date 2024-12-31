function wordValue(array) {

  let result = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] !== " ") {
        sum += (array[i][j].charCodeAt(0) - 96);
      }
    }
    result.push(sum * (i + 1));
  }
  return result;

}



console.log(wordValue(["codewar s","abc","xyz"]));