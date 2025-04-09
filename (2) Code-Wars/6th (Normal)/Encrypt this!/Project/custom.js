var encryptThis = function(text) {

  let splited = text.split(" ");
  let result = "";
  for (let i = 0; i < splited.length; i++) {
    let word = splited[i];
    if (word.length === 1) {
      result += word.charCodeAt(0).toString();
      result += " ";
    } else if (word.length === 2) {
      result += word.charCodeAt(0) + word[1];
      result += " ";
    } else {
      result +=  word.charCodeAt(0) + word[word.length - 1] + word.slice(2, word.length - 1) + word[1];
      result += " ";
    }
  }

  return result.trim();

}


console.log(encryptThis("A wise old owl lived in an oak"));