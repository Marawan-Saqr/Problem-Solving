function hasUniqueChars(str){

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (result.includes(str[i])) {
      return false;
    } else {
      result += str[i];
    }
  }


  return true;

}

console.log(hasUniqueChars("  nAa"));