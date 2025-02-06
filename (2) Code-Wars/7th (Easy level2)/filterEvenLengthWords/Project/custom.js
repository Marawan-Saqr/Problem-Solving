function filterEvenLengthWords(words) {

  let result = words.filter((element)=> {
    return element.length % 2 === 0;
  })

  return result;

}



console.log(filterEvenLengthWords(["One", "Two", "Three", "Four"]));