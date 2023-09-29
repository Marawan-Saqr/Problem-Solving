function doubleChar(str) {
  let splited = str.split("");
  let empty = [];
  for (let i = 0; i < splited.length; i++) {
    empty.push(splited[i] + splited[i]);
  }
  return empty.join("");
}



console.log(doubleChar("String"));











