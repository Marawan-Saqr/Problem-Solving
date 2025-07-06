function modifyMultiply(str, loc, numRepeat) {

  let strSplited = str.split(" ");
  let strLocationWord = "";
  for (let i = 0; i < strSplited.length; i++) {
    if (i === loc) {
      strLocationWord = strSplited[i];              // string
    }
  }


  let result = Array(numRepeat).fill(strLocationWord).join("-");
  return result;

}




console.log(modifyMultiply("This is a string", 3, 5));