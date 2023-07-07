function removeSpecialCharacters(strParam) {
  let charArray = [".", "#", "@", "!", "$", "?", "`"];
  let newWord = strParam.split("");
  for (let i = 0; i < newWord.length; i++) {
    if (charArray.includes(newWord[i])) {
      newWord.splice(i, 1);
    }
  }
  return newWord.join("");
}

console.log(removeSpecialCharacters("Hi How are you"));


