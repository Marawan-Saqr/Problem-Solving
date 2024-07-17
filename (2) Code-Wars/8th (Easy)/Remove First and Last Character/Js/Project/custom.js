function removeChar(str){

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i !== 0 && i !== str.length - 1) {
      result += str[i];
    }
  }

  return result;

}

console.log(removeChar("eloquent"));