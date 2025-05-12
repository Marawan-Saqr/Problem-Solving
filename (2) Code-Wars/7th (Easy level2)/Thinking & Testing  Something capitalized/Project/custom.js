function testit(s) {

  let result = "";
  let splited = s.split(" ");    // ['a', 'a']


  for (let i = 0; i < splited.length; i++) {
    for (let j = 0; j < splited[i].length; j++) {
      if (j === splited[i].length - 1) {
        result += splited[i][j].toUpperCase();
        result += " ";
      } else {
        result += splited[i][j];
      }
    }
  }

  return result.trim();

}

console.log(testit("ab ab"));