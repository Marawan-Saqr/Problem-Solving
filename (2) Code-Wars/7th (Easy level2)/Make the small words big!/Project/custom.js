// function smallWordHelper(sentence) {

//   let splited = sentence.split(" ");

//   let result = splited.map((element)=> {
//     if (element.length <= 3) {
//       return element.toUpperCase();
//     } else if (element.length > 3) {
//       return element.replace(/[aeiouAEIOU]/g, "");
//     }
//   })

//   return result.join(" ");

// }


// console.log(smallWordHelper("The quick brown fox jumps over the lazy dog"));


///////////////////////////////Another Solution///////////////////////////////////////////////////////

function smallWordHelper(sentence) {

  let splited = sentence.split(" ");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = [];

  for (let i = 0; i < splited.length; i++) {
    if (splited[i].length <= 3) {
      result.push(splited[i].toUpperCase());
    } else {
      let newWord = "";
      for (let j = 0; j < splited[i].length; j++) {
        if (!vowels.includes(splited[i][j])) {
          newWord += splited[i][j];
        }
      }
      result.push(newWord);
    }
  }

  return result.join(" ");

}


console.log(smallWordHelper("The quick brown fox jumps over the lazy dog"));