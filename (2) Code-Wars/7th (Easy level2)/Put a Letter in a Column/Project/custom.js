function buildRowText(index, character) {

  let columnNumbers = 9;
  let result = "";

  for (let i = 0; i <= columnNumbers; i++) {
    if (i === index) {
      result += `|${character}`;
    } else {
      result += "| ";
    }
  }

  return result.trim();

}

console.log(buildRowText(2, 'A'));