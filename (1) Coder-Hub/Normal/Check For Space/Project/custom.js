function hasSpace(strParam) {

  let result = "";

  for (let i = 0; i < strParam.length; i++) {
    if (strParam[i] === " ") {
      result += "#";
    } else {
      result += strParam[i];
    }
  }

  return result;

}

console.log(hasSpace("Saudi Arabia"));