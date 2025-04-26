function solve(s) {

  let vowels = ["a", "e", "i", "o", "u"];
  let newText = s.toLowerCase();
  let result = [];
  let sum = "";

  for (let i = 0; i < newText.length; i++) {
    if (!vowels.includes(newText[i])) {
      sum += newText[i];
    } else if (vowels.includes(newText[i])) {
      if (sum !== "") {
        result.push(sum);
        sum = "";
      }
    }
  }


  if (sum !== "") {
    result.push(sum);
  }


  let finalResult = [];
  for (let i = 0; i < result.length; i++) {
    let sumNumbers = 0;
    for (let j = 0; j < result[i].length; j++) {
      sumNumbers +=  result[i][j].charCodeAt(0) - 97 + 1;
    }
    finalResult.push(sumNumbers);
  }

  return Math.max(...finalResult);

}




console.log(solve("mischtschenkoana"));