function removeSpecialCharacters(strParam) {

  let specialCharacters = ['$', '!', '@', '#', '.', '?'];
  let result = "";

  for (let i = 0; i < strParam.length; i++) {
    if (specialCharacters.includes(strParam[i])) {
      continue;
    } else {
      result += strParam[i];
    }
  }

  return result;
}

console.log(removeSpecialCharacters("Are_u_coming?"));

///////////////////////////////////////////////////////////////////////////////////////////////////

// Another Solution Using Map

function removeSpecialCharacters(strParam) {

  let specialCharacters = ['$', '!', '@', '#', '.', '?'];
  

  let result = strParam.split("").map(function(e) {
    if (specialCharacters.includes(e)) {
      return "";
    } else {
      return e;
    }
  }).join("");

  return result;

}

console.log(removeSpecialCharacters("Are_u_coming?"));