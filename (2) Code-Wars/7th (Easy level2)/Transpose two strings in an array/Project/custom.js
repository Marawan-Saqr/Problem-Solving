function transposeTwoStrings(array) {

  let maxLength = Math.max(array[0].length, array[1].length);
  let result = [];
  let wordOne = array[0];
  let wordTwo = array[1];


  for (let i = 0; i < maxLength; i++) {
    let charOne = wordOne[i] || " ";
    let charTwo = wordTwo[i] || " ";
    result.push(charOne + " " + charTwo);
  }

  return result.join("\n");

}


console.log(transposeTwoStrings(['Marawan', 'Saqr']));