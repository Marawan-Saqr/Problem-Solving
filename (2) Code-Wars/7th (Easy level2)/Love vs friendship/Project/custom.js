function wordsToMarks(string){

  let result = 0;
  for (let i = 0; i < string.length; i++) {
    result += string[i].charCodeAt(0) - 96;

  }

  return result;

}



console.log(wordsToMarks("attitude"));