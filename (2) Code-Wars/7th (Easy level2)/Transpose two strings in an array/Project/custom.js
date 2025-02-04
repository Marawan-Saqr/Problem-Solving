function transposeTwoStrings(array) {
  let maxLength = Math.max(array[0].length, array[1].length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    let char1 = array[0][i] || " ";
    let char2 = array[1][i] || " ";
    result.push(char1 + " " + char2);
  }

  return result.join("\n");

}


console.log(transposeTwoStrings(["Cat", ""]));