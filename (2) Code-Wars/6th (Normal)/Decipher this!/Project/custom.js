function decipherThis(str) {

  let result = [];
  let splited = str.split(" ");

  for (let i = 0; i < splited.length; i++) {
    let number = "";
    let characters = "";
    let finalWord = "";
    for (let j = 0; j < splited[i].length; j++) {
      if (!isNaN(splited[i][j])) {
        number += splited[i][j];
      } else  {
        characters += splited[i][j];
      }
    }
    finalWord += String.fromCharCode(number);
    finalWord += characters;
    result.push(finalWord);
  }



  let finalResult = [];
  for (let i = 0; i < result.length; i++) {
    let chars = result[i].split("");
    let temp = chars[1];
    chars[1] = chars[chars.length - 1];
    chars[chars.length - 1] = temp;
    let newWord = chars.join("");
    finalResult.push(newWord);
  }

  return finalResult.join(" ");

}




console.log(decipherThis("72olle 103doo 100ya"));