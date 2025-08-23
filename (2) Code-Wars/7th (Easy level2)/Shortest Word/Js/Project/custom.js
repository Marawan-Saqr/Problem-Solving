function findShort(s) {

  let splitedWords = s.split(" ");
  let numberOfCharacters = splitedWords.map((element)=> {
    return element.length;
  });

  let shortetWord = Math.min(...numberOfCharacters);
  return shortetWord;

}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));