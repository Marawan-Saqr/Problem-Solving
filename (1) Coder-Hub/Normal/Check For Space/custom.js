function hasSpace(strParam) {
  let result = "";
  let splited = strParam.split("");
  for (let i = 0; i < splited.length; i++) {
    if (splited[i].includes(" ")) {
      result += splited[i].replace(" ", "#");
    } else {
      result += splited[i];
    }
  }
  return result;
}



console.log(hasSpace("Saudi Arabia Egypt"));